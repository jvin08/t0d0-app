"use client";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  createTodo: (title: string, text: string) => void;
}

const AddTodo: FC<Props> = ({ createTodo }) => {
  // State for handling input value
  const [input, setInput] = useState({title: "", text: ""});

  // Event handler for input change
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(input => ({...input, [e.target.name]: e.target.value}));
  };

  // Event handler for adding a new todo
  const handleAdd = async () => {
    createTodo(input.title, input.text);
    setInput({title: "", text: ""});
  };

  // Event handler for adding a new todo on pressing Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      createTodo(input.title, input.text);
      setInput({title: "", text: ""});
    }
  };

  // Rendering the AddTodo component
  return (
    <div className="w-full flex gap-1 mt-2">
      <div className="flex flex-col w-full gap-1">
        {/* Input field for entering new todo title */}
        <input
          type="text"
          className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
          onChange={handleInput}
          value={input.title}
          name="title"
          required
          id="title"
          placeholder="Title"
        />
        {/* Input field for entering new todo text */}
        <input
          type="text"
          className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
          onChange={handleInput}
          value={input.text}
          name="text"
          onKeyDown={handleKeyPress}
          required
          placeholder="Text"
        />
      </div>
      {/* Button for adding a new todo */}
      <button
        className="flex justify-center items-center bg-green-600 text-green-50 rounded w-14 cursor-pointer"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};
export default AddTodo;