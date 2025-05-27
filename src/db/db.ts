import { drizzle } from "drizzle-orm/bun-sqlite";
import env from "@/lib/env";
import { Database } from "bun:sqlite";

const bunSqlite = new Database(env.DB_FILE_NAME, { create: true });
const db = drizzle({ client: bunSqlite });

export default db;
