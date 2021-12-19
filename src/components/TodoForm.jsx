import React from "react";
import { TodoContext } from "../TodoContext";

export default function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("");

    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(prevState => !prevState)
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (!newTodoValue) {
            return null
        }
        addTodo(newTodoValue);
        setOpenModal(prevState => !prevState)
    };

    return (
        <form class="bg-white mx-auto flex flex-col p-7 w-[600px] text-center" onSubmit={onSubmit}>
            <label class="text-center font-bold mb-4 text-lg">Escribe un nuevo TODO</label>
            <textarea
                class="w-[80%] h-28 resize-none border-2 p-2 border-blue-400 mx-auto shadow-lg"
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar cebolla para el almuerzo"
            ></textarea>
            <div class="mt-5 flex flex-row justify-around w-72 mx-auto">
                <button class="transition duration-200 hover:bg-red-600 hover:text-white border-2 border-black py-2 px-4 text-black" type="button" onClick={onCancel}>
                    Cancelar
                </button>
                <button class="transition duration-200 hover:bg-green-500 bg-blue-400 py-2 px-4 text-white" type="submit" >Añadir</button>
            </div>
        </form>
    );
}
