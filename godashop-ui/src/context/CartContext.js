import React, { createContext, useState } from 'react'

const CartContext = createContext();

function CartProvider({ children }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const value = {
        show,
        handleClose,
        handleShow
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }
