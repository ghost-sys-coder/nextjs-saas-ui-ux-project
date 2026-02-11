import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { integer, text, pgTable, serial, timestamp, json } from "drizzle-orm/pg-core";


export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().unique(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  credits: integer("credits").default(5),
  createdAt: timestamp("created_at").notNull().defaultNow()
});

export type User = InferSelectModel<typeof usersTable>; 
export type NewUser = InferInsertModel<typeof usersTable>;


// project schemas
export const projectsTable = pgTable("projects", {
  id: serial("id").primaryKey(),
  projectId: text("project_id").notNull().unique(),
  projectName: text("project_name"),
  projectVisualDescription: text("project_visual_description") ,
  theme: text("theme"),
  userId: text("user_id").references(() => usersTable.userId),
  userInput: text("user_input").notNull(),
  deviceType: text("device_type").notNull(),
  config: json(),
  createdAt: timestamp("created_at").notNull().defaultNow()
});

export type Project = InferSelectModel<typeof projectsTable>;
export type NewProject = InferInsertModel<typeof projectsTable>;


export const screenConfigTable = pgTable("screen_config", {
  id: serial("id").primaryKey(),
  projectId: text("project_id").references(() => projectsTable.projectId),
  screenId: text("screen_id"),
  screenName: text("screen_name"),
  purpose: text("purpose"),
  screenDescription: text("screen_description"),
  code: text("code"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export type ScreenConfig = InferSelectModel<typeof screenConfigTable>;
export type NewScreenConfig = InferInsertModel<typeof screenConfigTable>;


// create table relations
export const projectsRelations = relations(projectsTable, ({ one, many }) => ({
  user: one(usersTable, {
    fields: [projectsTable.userId],
    references: [usersTable.userId]
  }),

  screenConfigs: many(screenConfigTable),
}));

export const screenConfigRelations = relations(screenConfigTable, ({ one }) => ({
  project: one(projectsTable, {
    fields: [screenConfigTable.projectId],
    references: [projectsTable.projectId],
  }),
}));

export const usersRelations = relations(usersTable, ({ many }) => ({
  projects: many(projectsTable),
}));


