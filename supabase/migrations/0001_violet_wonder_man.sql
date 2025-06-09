ALTER TABLE "projects" ADD COLUMN "featuredImageUrl" varchar;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "gridCols" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "gridRows" integer DEFAULT 1 NOT NULL;