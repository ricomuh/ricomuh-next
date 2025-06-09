ALTER TABLE "projects" RENAME COLUMN "images" TO "imageUrls";--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "featuredImageUrl" SET NOT NULL;