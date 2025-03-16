import { pgTable, serial, text, boolean } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  text: text('text').notNull(),
  completed: boolean('completed').default(false),
});
