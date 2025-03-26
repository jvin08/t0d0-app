"use client";
import { getData } from "../actions/todoAction";
import { useState, useEffect } from "react";
import Todos from "../components/todos";
import { todoType } from "@/types/todoType";

export default function Home() {
  const [data, setData] = useState<todoType[]>([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await getData();
      setData(response);
    }, 1000); // Poll every 5 seconds
    return () => clearInterval(interval);

  }, []);
  return <Todos todos={data} />;
}