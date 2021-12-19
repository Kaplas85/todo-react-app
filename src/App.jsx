import React, { useContext } from "react";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import { TodoProvider, TodoContext } from "./TodoContext";

function App() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo

	} =
		useContext(TodoContext);
	return (
		<>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{error && <p>Desesperate, hubo un error</p>}
				{loading && <p>Estamos cargando, no desesperes</p>}
				{!loading && !searchedTodos.length && <p>Escribe tu primer TODO</p>}
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			<CreateTodoButton />
		</>
	);
}

export default App;
