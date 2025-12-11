"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Joew Harbert",
        role: "CEO",
        company: "NoonBrew",
        image: "https://picsum.photos/64?random=1",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut aliqua.",
    },
    {
        id: 2,
        name: "Robert Fox",
        role: "Owner",
        company: "Beards of Brothers",
        image: "https://picsum.photos/64?random=2",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut aliqua.",
    },
    {
        id: 3,
        name: "John Doe",
        role: "Software Engineer",
        company: "TechCorp",
        image: "https://picsum.photos/64?random=3",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut aliqua.",
    },
    {
        id: 4,
        name: "Michael Smith",
        role: "Product Manager",
        company: "InnovateX",
        image: "https://picsum.photos/64?random=4",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut aliqua.",
    },
    {
        id: 5,
        name: "David Johnson",
        role: "Entrepreneur",
        company: "Startup Inc.",
        image: "https://picsum.photos/64?random=5",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut aliqua.",
    },
];

const TestimonialsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        appendDots: (dots) => (
            <div>
                <ul className="custom-dots">{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-primary transition-colors"></div>
        ),
    };

    return (
        <section className="container-padding scroll-mt-12" id="testimonials">
            <div className="text-center mb-8">
                <h2 className="heading ">Our Testimonials</h2>
                <p className="text-gray-600">Our Customers Say</p>
            </div>
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="p-4">
                        <div className="bg-white shadow-lg rounded-2xl p-8 relative overflow-hidden hover:shadow-xl btn-transition border border-gray-100">
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>

                            {/* Profile Section */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                        <Quote
                                            className="text-white"
                                            size={12}
                                        />
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold font-quicksand text-lg text-gray-900">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-primary font-inter font-medium">
                                        {testimonial.role}
                                    </p>
                                    <p className="text-xs text-gray-500 font-inter">
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial Content */}
                            <div className="relative mb-6">
                                <p className="text-gray-700 font-inter leading-relaxed italic">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            {/* Rating Stars */}
                            <div className="flex justify-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default TestimonialsSlider;
