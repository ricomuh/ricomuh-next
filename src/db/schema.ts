import {
  integer,
  json,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const projectsTable = pgTable("projects", {
  uuid: uuid("uuid").primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  slug: varchar("slug").notNull().unique(),
  url: varchar("url"),
  featuredImageUrl: varchar("featuredImageUrl").notNull(),
  gridCols: integer("gridCols").notNull().default(1),
  gridRows: integer("gridRows").notNull().default(1),
  imageUrls: json("imageUrls").$type<string[]>(),
  description: text("description").notNull(),
  technologies: json("technologies").$type<string[]>(),
  githubUrl: varchar("githubUrl"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").$onUpdate(() => new Date()),
});

export const postsTable = pgTable("posts", {
  uuid: uuid("uuid").primaryKey().defaultRandom(),
  title: varchar("title").notNull(),
  imageUrl: varchar("imageUrl"),
  tags: json("tags").$type<string[]>(),
  slug: varchar("slug").notNull().unique(),
  body: text("body").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").$onUpdate(() => new Date()),
});
