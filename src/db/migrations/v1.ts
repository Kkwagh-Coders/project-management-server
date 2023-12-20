import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('user')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('name', 'text', (col) => col.notNull())
    .addColumn('email', 'text', (col) => col.notNull())
    .addColumn('password', 'text', (col) => col.notNull())
    .execute();

  await db.schema
    .createTable('project')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('name', 'text', (col) => col.notNull())
    .addColumn('head_id', 'integer', (col) =>
      col.references('user.id').onDelete('cascade').notNull(),
    )
    .addColumn('budget', 'decimal', (col) => col.notNull())
    .addColumn('start_date', 'text', (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
    )
    .addColumn('end_date', 'text', (col) => col.notNull())
    .execute();

  await db.schema
    .createTable('projectMember')
    .addColumn('project', 'integer', (col) =>
      col.references('project.id').onDelete('cascade').notNull(),
    )
    .addColumn('user', 'integer', (col) =>
      col.references('user.id').onDelete('cascade').notNull(),
    )
    .addColumn('role', 'text', (col) => col.notNull())
    .execute();

  await db.schema
    .createTable('task')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('name', 'text', (col) => col.notNull())
    .addColumn('project_id', 'integer', (col) =>
      col.references('team.id').onDelete('cascade').notNull(),
    )
    .addColumn('status', 'text', (col) => col.notNull())
    .addColumn('assigned_to', 'integer', (col) =>
      col.references('user.id').onDelete('cascade').notNull(),
    )
    .addColumn('priority', 'text', (col) => col.notNull())
    .execute();

  await db.schema
    .createTable('taskComment')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('task', 'integer', (col) =>
      col.references('task.id').onDelete('cascade').notNull(),
    )
    .addColumn('comment', 'text', (col) => col.notNull())
    .addColumn('commentedBy', 'integer', (col) =>
      col.references('user.id').onDelete('cascade').notNull(),
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('user').execute();
  await db.schema.dropTable('project').execute();
  await db.schema.dropTable('task').execute();
  await db.schema.dropTable('taskComment').execute();
  await db.schema.dropTable('projectMember').execute();
}
