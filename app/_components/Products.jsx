"use client";
import React, { useState, useEffect, useContext } from "react";
import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { CartContext } from "../context/context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const products = [
    {
        id: "1",
        category: "All",
        name: "Mixed Vegetable Pack",
        price: 5.0,
        discountedPrice: 4.5,
        imageLink:
            "https://images.unsplash.com/photo-1574955598898-d105479382e5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "3",
        category: "All",
        name: "Dairy Combo",
        price: 12.0,
        discountedPrice: 10.8,
        imageLink:
            "https://images.unsplash.com/photo-1608833269765-a52366f7c40e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFpcnklMjBDb21ib3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: "4",
        category: "All",
        name: "Beverage Assortment",
        price: 10.0,
        discountedPrice: 9.0,
        imageLink:
            "https://images.unsplash.com/photo-1734773557735-8fc50f94b473?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJldmVyYWdlJTIwQXNzb3J0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: "2",
        category: "All",
        name: "Fruit Basket",
        price: 15.0,
        discountedPrice: 13.5,
        imageLink:
            "https://images.unsplash.com/photo-1653164751482-f30e4cdb5788?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZydWl0JTIwYmFza2V0fGVufDB8fDB8fHww",
    },
    {
        id: "10",
        category: "All",
        name: "Carrot",
        price: 0.84,
        discountedPrice: 0.76,
        imageLink:
            "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhcnJvdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: "18",
        category: "All",
        name: "Milk",
        price: 0.74,
        discountedPrice: 0.67,
        imageLink:
            "https://images.unsplash.com/photo-1596633605700-1efc9b49e277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fE1pbGt8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: "20",
        category: "All",
        name: "Orange Juice",
        price: 0.48,
        discountedPrice: 0.43,
        imageLink:
            "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8T3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: "10",
        category: "Vegetables",
        name: "Carrot",
        price: 0.84,
        discountedPrice: 0.76,
        imageLink:
            "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhcnJvdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: "11",
        category: "Vegetables",
        name: "Tomato",
        price: 0.54,
        discountedPrice: 0.49,
        imageLink:
            "https://images.unsplash.com/photo-1534940519139-f860fb3c6e38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFRvbWF0b3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: "12",
        category: "Vegetables",
        name: "Potato",
        price: 0.42,
        discountedPrice: 0.38,
        imageLink:
            "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG90YXRvfGVufDB8fDB8fHww",
    },
    {
        id: "13",
        category: "Vegetables",
        name: "Onion",
        price: 1.75,
        discountedPrice: 1.58,
        imageLink:
            "https://images.unsplash.com/photo-1508747703725-719777637510?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE9uaW9ufGVufDB8fDB8fHww",
    },
    {
        id: "14",
        category: "Fruits",
        name: "Apple",
        price: 1.5,
        discountedPrice: 1.35,
        imageLink:
            "https://images.unsplash.com/photo-1506813713591-56fc5e539b80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fEFwcGxlfGVufDB8fDB8fHww",
    },
    {
        id: "15",
        category: "Fruits",
        name: "Banana",
        price: 0.3,
        discountedPrice: 0.27,
        imageLink:
            "https://images.unsplash.com/photo-1676495706236-f28daeef95d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEJhbmFuYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: "16",
        category: "Fruits",
        name: "Mango",
        price: 1.2,
        discountedPrice: 1.08,
        imageLink:
            "https://images.unsplash.com/photo-1588931929796-8f0ea6da0faa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbmdvfGVufDB8fDB8fHww",
    },
    {
        id: "17",
        category: "Fruits",
        name: "Watermelon",
        price: 0.91,
        discountedPrice: 0.82,
        imageLink:
            "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: "14",
        category: "All",
        name: "Apple",
        price: 1.5,
        discountedPrice: 1.35,
        imageLink:
            "https://images.unsplash.com/photo-1506813713591-56fc5e539b80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fEFwcGxlfGVufDB8fDB8fHww",
    },
    {
        id: "9",
        category: "Dairy",
        name: "Gourmet Cheese",
        price: 22.0,
        discountedPrice: 19.8,
        imageLink:
            "https://images.unsplash.com/photo-1695606452817-e28a67339e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdvdXJtZXQlMjBDaGVlc2V8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: "19",
        category: "Dairy",
        name: "Cheese",
        price: 5.0,
        discountedPrice: 4.5,
        imageLink:
            "https://images.unsplash.com/photo-1654513547430-973fe7570159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENoZWVzZXd8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: "3",
        category: "Dairy",
        name: "Dairy Combo",
        price: 12.0,
        discountedPrice: 10.8,
        imageLink:
            "https://images.unsplash.com/photo-1608833269765-a52366f7c40e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFpcnklMjBDb21ib3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: "18",
        category: "Dairy",
        name: "Milk",
        price: 0.74,
        discountedPrice: 0.67,
        imageLink:
            "https://images.unsplash.com/photo-1596633605700-1efc9b49e277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fE1pbGt8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: "4",
        category: "Drinks",
        name: "Beverage Assortment",
        price: 10.0,
        discountedPrice: 9.0,
        imageLink:
            "https://images.unsplash.com/photo-1734773557735-8fc50f94b473?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJldmVyYWdlJTIwQXNzb3J0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: "8",
        category: "Drinks",
        name: "Healthy Juice Pack",
        price: 18.0,
        discountedPrice: 16.2,
        imageLink:
            "https://images.unsplash.com/photo-1570179755590-00f1b1bd663a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGVhbHRoeSUyMEp1aWNlJTIwUGFja3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: "20",
        category: "Drinks",
        name: "Orange Juice",
        price: 0.48,
        discountedPrice: 0.43,
        imageLink:
            "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8T3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: "2",
        category: "Drinks",
        name: "Fruit Basket",
        price: 15.0,
        discountedPrice: 13.5,
        imageLink:
            "https://images.unsplash.com/photo-1634728813467-83e65cac57f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RnJ1aXQlMjBCYXNrZXQlMjBEcmlua3N8ZW58MHx8MHx8fDA%3D",
    },
];

export default function Products() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { addItemToCart, disabledButtons, setDisabledButtons } =
        useContext(CartContext);

    const categories = [
        { id: "all", name: "All" },
        { id: "vegetables", name: "Vegetables" },
        { id: "fruits", name: "Fruits" },
        { id: "drinks", name: "Drinks" },
        { id: "dairy", name: "Dairy" },
    ];

    useEffect(() => {
        const filtered = products.filter(
            (product) => product.category.toLowerCase() === activeCategory
        );
        setFilteredProducts(filtered);
    }, [activeCategory]);

    const addToCart = (product) => {
        addItemToCart(product);
        toast.success(`${product.name} added to cart!`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <section
            className="container-padding flex flex-col items-center overflow-hidden scroll-mt-12"
            id="products"
        >
            {/* Header */}
            <h2 className="heading mb-8">Our Products</h2>
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-3 lg:gap-6 mb-8 lg:mb-12 justify-center">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => {
                            setActiveCategory(category.id);
                        }}
                        className={`px-6 py-2 rounded-full font-medium transition-all font-quicksand cursor-pointer lg:text-lg ${
                            activeCategory === category.id
                                ? "bg-primary text-white"
                                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            {/* Products */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
                className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {filteredProducts.map((product, index) => (
                    <motion.div
                        key={index}
                        layout
                        className="bg-white border border-zinc-200 shadow-lg rounded-lg hover:scale-105 btn-transition cursor-pointer"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-42 bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                                src={product.imageLink}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-4">
                            <p className="font-inter text-gray-400">
                                {product.category}
                            </p>
                            <h3 className="font-quicksand text-lg font-bold mb-2">
                                {product.name}
                            </h3>
                            {/* Rating Stars */}
                            <div className="flex items-center gap-1">
                                {[...Array(4)].map((_, index) => (
                                    <span
                                        key={index}
                                        className="text-yellow-400 text-lg"
                                    >
                                        &#9733;
                                    </span>
                                ))}
                                <span className="text-gray-400 text-lg font-quicksand">
                                    &#9733; (4)
                                </span>
                            </div>
                            <p className="font-quicksand text-sm">
                                By{" "}
                                <span className="text-emerald-400">
                                    Manjula
                                </span>
                            </p>
                            {/* Prices */}
                            <div className="flex items-center justify-between gap-2 mt-2">
                                <div className="flex items-center gap-3">
                                    <p className="text-primary font-quicksand font-semibold text-lg">
                                        ${product.discountedPrice.toFixed(2)}
                                    </p>
                                    <p className="text-gray-400 line-through font-quicksand">
                                        ${product.price.toFixed(2)}
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        addToCart({
                                            id: product.id,
                                            imageLink: product.imageLink,
                                            name: product.name,
                                            price: product.discountedPrice,
                                            quantity: 1,
                                        });
                                        setDisabledButtons([
                                            ...disabledButtons,
                                            product.name,
                                        ]);
                                    }}
                                    className={`bg-emerald-100 hover:bg-emerald-200 text-primary px-6 md:px-4 py-2 rounded-md flex items-center gap-2 shadow-lg btn-transition font-quicksand ${
                                        disabledButtons.includes(product.name)
                                            ? "pointer-events-none cursor-not-allowed opacity-50"
                                            : "pointer-events-auto cursor-pointer"
                                    }`}
                                >
                                    {disabledButtons.includes(product.name) ? (
                                        <ShoppingCart
                                            size={18}
                                            className="text-primary"
                                        />
                                    ) : (
                                        <>
                                            <ShoppingCart
                                                size={18}
                                                className="text-primary"
                                            />
                                            <p>Add</p>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
