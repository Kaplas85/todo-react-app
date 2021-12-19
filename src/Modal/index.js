import React from 'react'
import ReactDOM from 'react-dom'

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div class="flex flex-row items-center absolute top-0 left-0 w-screen h-screen overflow-hidden bg-black bg-opacity-80 z-0">
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export default Modal