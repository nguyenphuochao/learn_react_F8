import { createContext, useState } from 'react'

const CartContext = createContext();

function CartProvider({ children }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Tổng số lượng cart
    const [totalCart, setTotalCart] = useState(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        return cart.reduce((total, product) => total + product.qty, 0);
    });

    // Danh sách cart
    const [cartItems, setCartItems] = useState(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        return cart;
    })

    // Tổng tiền
    const [total, setTotal] = useState(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        return cart.reduce((total, product) => total + product.price * product.qty, 0);
    });

    const value = {
        show,
        handleClose,
        handleShow,
        totalCart,
        setTotalCart,
        cartItems,
        setCartItems,
        total,
        setTotal
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }
