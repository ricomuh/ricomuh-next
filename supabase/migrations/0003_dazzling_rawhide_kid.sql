ALTER TABLE "posts" ALTER COLUMN "uuid" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "uuid" SET DEFAULT gen_random_uuid();