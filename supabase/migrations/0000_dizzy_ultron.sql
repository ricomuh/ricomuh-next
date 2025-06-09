CREATE TABLE "posts" (
	"uuid" uuid PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"imageUrl" varchar,
	"tags" json,
	"slug" varchar NOT NULL,
	"body" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp NOT NULL,
	CONSTRAINT "posts_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"uuid" uuid PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"slug" varchar NOT NULL,
	"url" varchar,
	"images" json,
	"description" text NOT NULL,
	"technologies" json,
	"githubUrl" varchar,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp NOT NULL,
	CONSTRAINT "projects_slug_unique" UNIQUE("slug")
);
