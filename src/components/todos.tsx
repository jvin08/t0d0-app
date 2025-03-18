"use client";
import { FC } from "react";
import { todoType } from "../types/todoType";
import Todo from "./todo";
import AddTodo from "./addTodo";
import { addTodo, deleteTodo, editTodo, toggleTodo, deleteAllTodos, deleteCompletedTodos } from "../actions/todoAction";

interface Props {
  todos: todoType[];
}

const Todos: FC<Props> = ({ todos }) => {
  // Function to create a new todo item
  const createTodo = (title: string, text: string) => {
    const max = 1000;
    const id = Math.floor(Math.random() * max);
    addTodo(id, title, text);
  };

  // Function to change the text of a todo item
  const changeTodoText = (id: number, title: string, text: string) => {
    editTodo(id, title, text);
  };

  // Function to toggle the "done" status of a todo item
  const toggleIsTodoDone = (id: number) => {
    toggleTodo(id);
  };

  // Function to delete a todo item
  const deleteTodoItem = (id: number) => {
    deleteTodo(id);
  };

  // Function to delete all todo items
  const deleteAll = () => {
    if (confirm("Are you sure you want to delete all todos?")) {
      deleteAllTodos();
    }
  };

  // Function to delete all completed todo items
  const deleteCompleted = () => {
    deleteCompletedTodos();
  }

  // Rendering the Todo List component
  return (
    <main className="flex mx-auto max-w-xl w-full min-h-screen flex-col items-center p-16">
      <div className="text-4xl font-medium">add to-doo</div>
      {/* Adding Todo component for creating new todos */}
      <AddTodo createTodo={createTodo} />
      {/* Button for deleting all todos */}
      {/* Button for adding a new todo */}
      <div className="w-full flex gap-2 mt-2">
        <button
          className="flex items-center justify-center bg-gray-950 text-green-50 rounded px-2 h-9 w-full py-1 my-1 cursor-pointer"
          onClick={deleteCompleted}
        >
          🗑️ Completed 
        </button>
        <button
          className="flex items-center justify-center bg-gray-950 text-green-50 rounded px-2 h-9 w-full py-1 my-1 cursor-pointer"
          onClick={deleteAll}
        >
          🗑️ All 
        </button>
      </div>
      
      <div className="w-full flex flex-col mt-8 gap-2">
        {/* Mapping through todoItems and rendering Todo component for each */}
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            changeTodoText={changeTodoText}
            toggleIsTodoDone={toggleIsTodoDone}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </div>
    </main>
  );
};

export default Todos;
