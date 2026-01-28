import { integer, text, pgTable, serial, timestamp } from "drizzle-orm/pg-core";


export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().unique(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  credits: integer("credits").default(5),
  createdAt: timestamp("created_at").notNull().defaultNow()
});

