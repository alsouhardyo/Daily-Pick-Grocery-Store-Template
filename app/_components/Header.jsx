"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { Menu, X, ShoppingCart, Search, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CartContext } from "../context/context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const {
        cart,
        setCart,
        addItemToCart,
        removeItemFromCart,
        disabledButtons,
        setDisabledButtons,
    } = useContext(CartContext);

    const itemCount = cart.length;
    const price = cart.reduce((prev, next) => {
        return prev + next.price * next.quantity;
    }, 0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
            setOpenCart(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { title: "Home", href: "#" },
        { title: "Categories", href: "#categories" },
        { title: "Products", href: "#products" },
        { title: "Testimonials", href: "#testimonials" },
        { title: "Blogs", href: "#blogs" },
    ];

    return (
        <header
            className={`w-screen ${
                isScrolled
                    ? "fixed top-0 bg-white shadow-md header-anim"
                    : "relative"
            } z-50`}
            id="home"
        >
            <div className="max-w-7xl mx-auto px-4 py-4 md:px-8 lg:px-6">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center space-x-4">
                        <Image
                            src="/favicon.png"
                            alt="Logo"
                            width={50}
                            height={50}
                            quality={100}
                            className="w-10 h-10"
                        />
                        <span className="font-quicksand font-bold text-2xl">
                            Daily <span className="text-primary">Pick</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 md:space-x-6 font-quicksand">
                        {menuItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className={`text-gray-700 hover:text-primary btn-transition font-semibold md:text-sm lg:text-base`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    {/* Right Side Icons */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <Search
                                className="text-gray-700 cursor-pointer"
                                size={20}
                            />
                            <ShoppingCart
                                className="text-gray-700 cursor-pointer relative block"
                                size={20}
                                onClick={() => setOpenCart(!openCart)}
                            />

                            <div className="w-2 h-2 p-2 rounded-full bg-primary text-white flex justify-center items-center fixed top-3 translate-x-[300%] z-10">
                                <p className="text-sm font-quicksand">
                                    {itemCount}
                                </p>
                            </div>
                        </div>
                        <a
                            href="#products"
                            className="bg-primary hover:bg-hover text-white px-6 py-2 rounded-md font-quicksand cursor-pointer shadow-xl btn-transition"
                        >
                            Shop now
                        </a>
                    </div>

                    {/* Md Device Only */}

                    <ShoppingCart
                        className="text-gray-700 cursor-pointer relative md:block lg:hidden hidden"
                        size={20}
                        onClick={() => setOpenCart(!openCart)}
                    />
                    <div className="w-2 h-2 p-2 rounded-full bg-primary text-white md:flex justify-center items-center absolute right-54 md:right-8 bottom-11 z-10 hidden lg:hidden">
                        <p className="text-sm font-quicksand">{itemCount}</p>
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="md:hidden absolute left-0 right-0 bg-white shadow-lg mt-4 px-4 py-4"
                        >
                            <div className="flex flex-col space-y-4 font-quicksand">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        className="text-gray-700 hover:text-primary"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                                <div className="flex justify-between items-center space-x-4 pt-4 border-t border-zinc-300">
                                    <div className="flex items-center space-x-4">
                                        <Search
                                            className="text-gray-700"
                                            size={20}
                                        />
                                        <ShoppingCart
                                            className="text-gray-700 relative block"
                                            size={20}
                                            onClick={() => {
                                                setOpenCart(true);
                                                setIsOpen(false);
                                            }}
                                        />
                                        <div className="w-2 h-2 p-2 rounded-full bg-primary text-white flex justify-center items-center absolute left-18 bottom-11 z-10">
                                            <p className="text-sm font-quicksand">
                                                {itemCount}
                                            </p>
                                        </div>
                                    </div>
                                    <a
                                        href="#products"
                                        className="bg-primary hover:bg-hover shadow-xl text-white px-6 py-2 rounded-md font-quicksand cursor-pointer btn-transition"
                                    >
                                        Shop now
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Cart Modal */}
                <AnimatePresence>
                    {openCart && (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            style={{ willChange: "transform, opacity" }}
                            className={`w-full lg:w-1/2 h-screen bg-white shadow-lg absolute right-0 top-0 z-[10000] px-4 py-4 lg:right-0 xl:right-4`}
                        >
                            {/* Cart Header */}
                            <div className="flex justify-between items-center border-b border-zinc-300 pb-4">
                                <p className="font-quicksand text-xl font-bold">
                                    Shopping Cart
                                </p>
                                <X
                                    size={24}
                                    onClick={() => {
                                        setOpenCart(false);
                                    }}
                                    className="cursor-pointer"
                                />
                            </div>
                            {itemCount === 0 ? (
                                <div className="flex justify-center items-center flex-col gap-4 text-center border-b border-zinc-300 pb-4">
                                    <Image
                                        src="/cart.png"
                                        alt="Cart Image"
                                        width={200}
                                        height={200}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="space-y-4">
                                        <p className="text-2xl font-bold font-quicksand">
                                            Your cart is empty
                                        </p>
                                        <p className="font-inter text-gray-500">
                                            Please add product to your cart
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <ul
                                    className={`flex justify-start items-center flex-col gap-4 mt-4 h-full max-h-[70%] lg:max-h-[380px] xl:max-h-[435px] overflow-y-auto pr-4 border-b border-zinc-200 pb-2`}
                                >
                                    {cart.map((item, index) => (
                                        <li
                                            key={item.name}
                                            className="flex justify-start items-center w-full"
                                        >
                                            <div className="relative rounded-lg">
                                                <Image
                                                    src={item.imageLink}
                                                    alt={item.name}
                                                    className="rounded-lg w-25 lg:w-35 h-auto object-cover"
                                                    sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                                                    width={200}
                                                    height={200}
                                                />
                                            </div>
                                            <div className="flex justify-between items-start w-full">
                                                <div className="ml-4">
                                                    <p className="text-sm md:text-base font-inter font-semibold">
                                                        {item.name}
                                                    </p>
                                                    <p className="text-gray-500">
                                                        {item.quantity} Bag X
                                                    </p>
                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center space-x-4 mt-2">
                                                        <button
                                                            onClick={() => {
                                                                setCart(() => {
                                                                    return cart.map(
                                                                        (
                                                                            item,
                                                                            i
                                                                        ) =>
                                                                            i ===
                                                                            index
                                                                                ? {
                                                                                      ...item,
                                                                                      quantity:
                                                                                          item.quantity <=
                                                                                          1
                                                                                              ? 1
                                                                                              : item.quantity -
                                                                                                1,
                                                                                  }
                                                                                : item
                                                                    );
                                                                });
                                                            }}
                                                            className="w-6 h-6 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
                                                        >
                                                            <Minus size={16} />
                                                        </button>
                                                        <span className="font-quicksand font-semibold">
                                                            {
                                                                cart[index]
                                                                    .quantity
                                                            }
                                                        </span>
                                                        <button
                                                            onClick={() => {
                                                                setCart(() => {
                                                                    return cart.map(
                                                                        (
                                                                            item,
                                                                            i
                                                                        ) =>
                                                                            i ===
                                                                            index
                                                                                ? {
                                                                                      ...item,
                                                                                      quantity:
                                                                                          item.quantity <
                                                                                          1
                                                                                              ? 1
                                                                                              : item.quantity +
                                                                                                1,
                                                                                  }
                                                                                : item
                                                                    );
                                                                });
                                                            }}
                                                            className="w-6 h-6 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
                                                        >
                                                            <Plus size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center justify-end gap-2">
                                                    <p className="lg:text-lg font-bold font-quicksand">
                                                        $
                                                        {(
                                                            item.price *
                                                            item.quantity
                                                        ).toFixed(2)}
                                                    </p>
                                                    <button
                                                        onClick={() => {
                                                            setDisabledButtons(
                                                                (prev) =>
                                                                    prev.filter(
                                                                        (btn) =>
                                                                            btn !==
                                                                            item.name
                                                                    )
                                                            );
                                                            removeItemFromCart(
                                                                item
                                                            );
                                                            toast.success(
                                                                `${item.name} removed from your cart!`,
                                                                {
                                                                    position:
                                                                        "bottom-right",
                                                                    autoClose: 3000,
                                                                    hideProgressBar: false,
                                                                    closeOnClick: true,
                                                                    pauseOnHover: true,
                                                                    draggable: true,
                                                                    progress:
                                                                        undefined,
                                                                }
                                                            );
                                                        }}
                                                        className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all font-quicksand font-semibold cursor-pointer"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {/* Subtotal Part */}
                            <div
                                className={`${
                                    cart.length === 0
                                        ? `mt-0`
                                        : `fixed bottom-0 right-0 w-full lg:w-full px-4`
                                }`}
                            >
                                <div className="mt-2 flex justify-between items-center px-4">
                                    <p className="font-quicksand text-lg font-bold">
                                        Subtotal
                                    </p>
                                    <p className="font-quicksand text-lg font-bold lg:pr-2">
                                        ${price.toFixed(2)}
                                    </p>
                                </div>
                                <div className="mt-4 px-4 pb-4">
                                    <button
                                        className={`w-full lg:text-lg ${
                                            itemCount === 0
                                                ? "bg-gray-200 text-slate-400 pointer-events-none"
                                                : "bg-primary text-white pointer-events-auto"
                                        } px-6 py-4 rounded-lg shadow-lg font-quicksand font-semibold hover:bg-hover btn-transition cursor-pointer`}
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* Overlay when cart is open */}
                {openCart && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 bg-black/30 z-[900]"
                        onClick={() => setOpenCart(false)}
                    ></motion.div>
                )}
            </div>
        </header>
    );
}
