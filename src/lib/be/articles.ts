import { db } from "@/db";
import { articlesTable } from "@/db/schema";
import { sql } from "drizzle-orm";

export async function getRandomArticles(amount: number = 5) {
  const articles = await db
    .select()
    .from(articlesTable)
    .orderBy(sql`random()`)
    .limit(amount);

  return articles;
}

export async function getAllArticles() {
  const articles = await db
    .select()
    .from(articlesTable)
    .orderBy(sql`random()`);

  return articles;
}
