import {
  boolean,
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
  type: varchar("type", {
    enum: ["web", "mobile", "desktop", "game"],
  })
    .notNull()
    .default("game"),
  name: varchar("name").notNull(),
  slug: varchar("slug").notNull().unique(),
  url: varchar("url"),
  featured: boolean("featured").notNull().default(false),
  featuredImageUrl: varchar("featuredImageUrl").notNull(),
  videoEmbedUrl: varchar("videoEmbedUrl"),
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

export const contactsTable = pgTable("contacts", {
  uuid: uuid("uuid").primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  subject: varchar("subject").notNull(),
  email: varchar("email").notNull().unique(),
  message: text("message").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").$onUpdate(() => new Date()),
});

export const guestsignsTable = pgTable("guest_signs", {
  uuid: uuid("uuid").primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});

export const articlesTable = pgTable("articles", {
  uuid: uuid("uuid").primaryKey().defaultRandom(),
  title: varchar("title").notNull(),
  url: varchar("url").notNull().unique(),
  imageUrl: varchar("imageUrl").notNull(),
  website: varchar("website").notNull(),
  description: text("description"),
});
