"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "../db/db";
import { todos } from "../db/schema";

export const getData = async () => {
  const data = await db.select().from(todos);
  return data;
};

export const addTodo = async (id: number, title: string, text: string) => {
  await db.insert(todos).values({
    id: id,
    title: title,
    text: text,
  });
};

export const deleteTodo = async (id: number) => {
  await db.delete(todos).where(eq(todos.id, id));

  revalidatePath("/");
};

export const deleteAllTodos = async () => {
  try {
    console.log("Deleting all todos...");
    await db.delete(todos);
    revalidatePath("/");
  } catch (error) {
    console.error("Error deleting all todos:", error);
  }
};

export const deleteCompletedTodos = async () => {
  try {
    await db.delete(todos).where(eq(todos.done, true));
    revalidatePath("/");
  } catch (error) {
    console.error("Error deleting completed todos:", error);
  }
}

export const toggleTodo = async (id: number) => {
  await db
    .update(todos)
    .set({
      done: not(todos.done),
    })
    .where(eq(todos.id, id));

  revalidatePath("/");
};

export const editTodo = async (id: number, title: string, text: string) => {
  await db
    .update(todos)
    .set({
      title: title,
      text: text,
    })
    .where(eq(todos.id, id));

  revalidatePath("/");
};