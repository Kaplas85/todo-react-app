import React, { createContext, useState } from 'react'
import useLocalStorage from './useLocalStorage';

const TodoContext = createContext()

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", []);
    const [search, setSearch] = useState("");

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchedTodos > 0) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLocaleLowerCase();
            const userInput = search.toLowerCase();

            return todoText.includes(userInput);
        });
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);

        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);

        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);

        saveTodos(newTodos);
    };
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            search,
            searchedTodos,
            setSearch,
            completeTodo,
            deleteTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }