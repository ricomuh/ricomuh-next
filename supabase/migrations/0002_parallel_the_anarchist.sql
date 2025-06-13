ALTER TABLE "articles" ALTER COLUMN "imageUrl" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "articles" ALTER COLUMN "website" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "articles" ALTER COLUMN "description" DROP NOT NULL;