import { pgTable, integer, text, boolean } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  text: text('text').notNull(),
  completed: boolean('completed').default(false),
});
