"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const deals = [
    {
        id: "1",
        name: "Organic Bananas",
        description: "Approx. 1 lb",
        price: 1.29,
        quantity: 1,
        badges: [],
        imageLink:
            "https://images.unsplash.com/photo-1647377502180-7604b5470dbe?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "2",
        name: "Fresh Strawberries",
        description: "16 oz package",
        price: 4.99,
        quantity: 1,
        badges: ["organic"],
        imageLink:
            "https://images.unsplash.com/photo-1717625940956-421a56f5bdc8?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RnJlc2glMjBTdHJhd2JlcnJpZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: "3",
        name: "Hass Avocados",
        description: "2-count bag",
        price: 3.49,
        quantity: 1,
        badges: [],
        imageLink:
            "https://images.unsplash.com/photo-1726177551991-270f9e79b65e?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGFzcyUyMEF2b2NhZG9zfGVufDB8fDB8fHww",
    },
    {
        id: "4",
        name: "Honey From Local Farm",
        description: "12 oz jar",
        price: 9.99,
        quantity: 1,
        badges: ["organic"],
        imageLink:
            "https://images.unsplash.com/photo-1605880980331-20a711b27338?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    },
];

export default function Deals() {
    const { addItemToCart, disabledButtons, setDisabledButtons } =
        useContext(CartContext);
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
            className="container-padding flex justify-center items-center flex-col gap-4 lg:gap-10 scroll-mt-12"
            id="deals"
        >
            {/* Header */}
            <div>
                <h2 className="heading capitalize">Deals of the day</h2>
            </div>
            {/* Deals */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
                {deals.map((deal) => (
                    <div
                        key={deal.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 cursor-pointer btn-transition"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-48">
                            {deal.badges.includes("organic") && (
                                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-2xl px-4 py-2 rounded-full text-sm font-quicksand font-medium z-10">
                                    🌿 Organic
                                </div>
                            )}
                            <Image
                                src={deal.imageLink}
                                fill
                                alt={deal.name}
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="p-6">
                            <h3 className="font-quicksand font-bold text-xl text-gray-900 mb-1">
                                {deal.name}
                            </h3>
                            <p className="font-quicksand font-semibold text-primary mb-4">
                                {deal.description}
                            </p>

                            {/* Price and Add Button */}
                            <div className="flex items-center justify-between">
                                <span className="font-quicksand font-bold text-xl text-gray-900">
                                    ${deal.price}
                                </span>
                                <button
                                    onClick={() => {
                                        addToCart({
                                            id: deal.id,
                                            imageLink: deal.imageLink,
                                            name: deal.name,
                                            price: deal.price,
                                            quantity: 1,
                                        });
                                        setDisabledButtons([
                                            ...disabledButtons,
                                            deal.name,
                                        ]);
                                    }}
                                    className={`bg-primary hover:bg-hover text-white w-10 h-10 rounded-full flex items-center justify-center btn-transition disabled:opacity-50 disabled:cursor-not-allowed ${
                                        disabledButtons.includes(deal.name)
                                            ? "pointer-events-none cursor-not-allowed opacity-50"
                                            : "pointer-events-auto cursor-pointer"
                                    }`}
                                >
                                    <ShoppingCart size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
