import React from "react";

export default function CreateTodoButton({ openModal, setOpenModal }) {
  const toggleModal = () => {
    console.log('alog')
    setOpenModal(!openModal)
  }
  return (
    <button className="fixed bottom-9 right-9 bg-blue-600 text-white text-3xl px-4 py-2 rounded-full z-30" onClick={toggleModal}>
      +
    </button>
  );
}
