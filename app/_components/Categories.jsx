"use client";
import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const categories = [
    {
        name: "Fruits",
        image: "/fresh-fruits.png", // Variety of Fresh Fruits
        itemsAvailable: 24,
        bgColor: "bg-red-100",
    },
    {
        name: "Vegetables",
        image: "/vegetables.png", // Variety of vegetables
        itemsAvailable: 32,
        bgColor: "bg-green-100",
    },
    {
        name: "Dairy",
        image: "/dairy-products.png", // Milk and dairy products
        itemsAvailable: 18,
        bgColor: "bg-blue-100",
    },
    {
        name: "Bakery",
        image: "/bakery.png", // Freshly baked bread and pastries
        itemsAvailable: 15,
        bgColor: "bg-yellow-100",
    },
    {
        name: "Poultry",
        image: "/halal-poultry-meat.png", // Halal-certified meat cuts
        itemsAvailable: 20,
        isHalal: true,
        bgColor: "bg-purple-100",
    },
    {
        name: "Frozen Foods",
        image: "/frozen-food.png", // Assorted frozen food items
        itemsAvailable: 28,
        bgColor: "bg-cyan-100",
    },
    {
        name: "Pantry",
        image: "/pantry.png", // Essential pantry items like rice and beans
        itemsAvailable: 110,
        bgColor: "bg-amber-100",
    },
    {
        name: "Spices",
        image: "/herbs-spices.png", // Assorted herbs and spices
        itemsAvailable: 70,
        bgColor: "bg-lime-100",
    },
    {
        name: "Honey",
        image: "/organic-honey.png", // Jar of organic honey
        itemsAvailable: 20,
        bgColor: "bg-orange-100",
    },
    {
        name: "Olive Oil",
        image: "/olive-oil.png", // Bottle of premium olive oil
        itemsAvailable: 15,
        bgColor: "bg-emerald-100",
    },
];

export default function Categories() {
    const sliderRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: !isHovered,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <section className="container-padding overflow-x-hidden scroll-mt-12" id="categories">
            {/* Heading */}

            <div className="flex justify-between items-center mb-8">
                <h2 className="heading">
                    Shop by Category
                </h2>
                <div className="flex gap-2">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 btn-transition cursor-pointer"
                        aria-label="Previous category"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 btn-transition cursor-pointer"
                        aria-label="Next category"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Category Slider */}

            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Slider ref={sliderRef} {...settings}>
                    {categories.map((category, index) => (
                        <div key={index} className="px-2">
                            <div
                                className={`${category.bgColor} rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-all`}
                            >
                                <div className="relative w-28 h-28 mb-4 overflow-hidden rounded-lg">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100px, 150px"
                                    />
                                </div>
                                <h3 className="text-center font-semibold text-lg font-quicksand">
                                    {category.name}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1 font-inter">
                                    {category.itemsAvailable ||
                                        category.itemCount ||
                                        0}{" "}
                                    items
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Banner Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {/* Weekly Deals Banner */}
                <div className="relative h-[250px] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/banner-1.jpg"
                            alt="Weekly Deals"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    <div className="relative h-full z-10 p-6">
                        <div className="flex flex-col h-full justify-center">
                            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium w-fit font-inter shadow-lg">
                                Weekly Deals
                            </span>
                            <h3 className="font-quicksand font-bold text-2xl md:text-3xl mt-4 mb-2 text-white">
                                Save Big This Week
                            </h3>
                            <p className="text-gray-100 font-inter mb-6">
                                Up to 20% off on daily essentials
                            </p>
                            <a href="#products" className="bg-primary hover:bg-hover text-white px-6 py-2 rounded-full flex items-center gap-2 btn-transition w-fit font-quicksand cursor-pointer">
                                Shop Now
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Fresh Arrivals Banner */}
                <div className="relative h-[250px] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/banner-2.jpg"
                            alt="Fresh Arrivals"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="relative h-full z-10 p-6">
                        <div className="flex flex-col h-full justify-center">
                            <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium w-fit font-inter shadow-lg">
                                New Arrivals
                            </span>
                            <h3 className="font-quicksand font-bold text-2xl md:text-3xl mt-4 mb-2 text-white">
                                Fresh Stock Daily
                            </h3>
                            <p className="text-gray-100 font-inter mb-6">
                                Quality products at great prices
                            </p>
                            <a href="#products" className="bg-primary hover:bg-hover text-white px-6 py-2 rounded-full flex items-center gap-2 btn-transition w-fit font-quicksand cursor-pointer">
                                Shop Now
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
