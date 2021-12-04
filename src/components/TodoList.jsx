import React from "react";

export default function TodoList(props) {
  return (
    <section className="max-w-xl mx-auto flex flex-col justify-evenly">
      {props.children}
    </section>
  );
}
