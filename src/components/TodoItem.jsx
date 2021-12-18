import React from "react";

export default function TodoItem(props) {
  return (
    <li className="relative bg-gray-50 shadow-md my-5 py-6 px-4 text-center flex flex-row justify-evenly">
      <span
        className={`absolute shadow-md transition transform cursor-pointer duration-300 hover:shadow-lg hover:scale-110 -left-2 -top-2 ${
          props.completed ? "bg-green-500 text-white" : "bg-white text-black"
        } px-3 py-1 rounded-full  font-bold text-xl`}
        onClick={props.onComplete}
      >
        C
      </span>
      <p
        className={`transition duration-500 ${
          props.completed && "line-through"
        }`}
      >
        {props.text}
      </p>
      <span
        className="absolute shadow-md transition transform cursor-pointer duration-300 hover:shadow-lg hover:scale-110 -right-2 -top-2 bg-red-500 px-3 py-1 rounded-full text-white font-bold text-xl"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}
