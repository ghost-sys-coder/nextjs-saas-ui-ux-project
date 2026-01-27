import { integer, text, pgTable } from "drizzle-orm/pg-core";

export const todo = pgTable("users", {
  id: integer("id").primaryKey(),
  name: text("text").notNull(),
  email: text("email").notNull().unique(),
  credits: integer().default(5),
});
