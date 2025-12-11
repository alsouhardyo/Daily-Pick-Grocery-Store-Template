"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);
    
    const addItemToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
    };

    const removeItemFromCart = (item) => {
        const updatedCart = cart.filter((i) => i.id !== item.id);
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider
            value={{ cart, setCart, addItemToCart, removeItemFromCart, disabledButtons, setDisabledButtons }}
        >
            {children}
        </CartContext.Provider>
    );
};
