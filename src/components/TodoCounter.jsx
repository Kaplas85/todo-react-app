import React from "react";

export default function TodoCounter({ completed, total }) {
  return (
    <h2 className="text-center font-bold mt-14 text-4xl">
      {completed > 0 ? "Has" : "No has"} completado{" "}
      {completed == 0 ? "ningun TODO" : completed} de {total} TODOs
    </h2>
  );
}
