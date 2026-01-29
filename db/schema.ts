import { integer, text, pgTable, serial, timestamp, json } from "drizzle-orm/pg-core";


export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().unique(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  credits: integer("credits").default(5),
  createdAt: timestamp("created_at").notNull().defaultNow()
});


// project schemas
export const projectsTable = pgTable("projects", {
  id: serial("id").primaryKey(),
  projectId: text("project_id").notNull().unique(),
  userId: text("user_id").references(() => usersTable.userId),
  userInput: text("user_input").notNull(),
  deviceType: text("device_type").notNull(),
  config: json(),
  createdAt: timestamp("created_at").notNull().defaultNow()
})

