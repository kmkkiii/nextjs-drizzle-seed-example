import { pgTable, integer, text, timestamp } from 'drizzle-orm/pg-core';

const timestamps = {
  updated_at: timestamp(),
  created_at: timestamp().defaultNow().notNull(),
};

export const usersTable = pgTable('users', {
  id: integer().primaryKey(),
  name: text().notNull(),
  email: text().notNull().unique(),
  age: integer(),
  ...timestamps,
});

export const postsTable = pgTable('posts', {
  id: integer().primaryKey(),
  title: text().notNull(),
  description: text(),
  userId: integer('user_id').references(() => usersTable.id),
  ...timestamps,
});
