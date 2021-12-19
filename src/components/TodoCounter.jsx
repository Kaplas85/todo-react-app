import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

export default function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext)
  return (
    <h2 className="text-center font-bold mt-14 text-4xl">
      {completedTodos > 0 ? "Has" : "No has"} completado{" "}
      {completedTodos === 0 ? "ningun TODO" : completedTodos} de {totalTodos} TODOs
    </h2>
  );
}
