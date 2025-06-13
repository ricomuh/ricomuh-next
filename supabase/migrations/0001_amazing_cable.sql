CREATE TABLE "articles" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar NOT NULL,
	"url" varchar NOT NULL,
	"imageUrl" varchar,
	"website" varchar,
	"description" text NOT NULL,
	CONSTRAINT "articles_url_unique" UNIQUE("url")
);
--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "videoEmbedUrl" varchar;