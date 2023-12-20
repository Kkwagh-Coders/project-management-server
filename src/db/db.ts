import { Database } from './types/database';
import SQLite from 'better-sqlite3';
import { Kysely, SqliteDialect } from 'kysely';
import path from 'path';

const dbPath = path.join(__dirname, 'ProjectManagement.db');

const dialect = new SqliteDialect({
  database: new SQLite(dbPath),
});

export const db = new Kysely<Database>({
  dialect,
});
