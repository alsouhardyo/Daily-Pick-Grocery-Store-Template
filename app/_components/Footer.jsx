"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter a valid email address");
            return;
        }
        toast.success("Subscribed successfully!");
        setEmail(""); // Clear the email field
    };

    const socialMediaLinks = [
        { href: "#", label: "Facebook", Icon: Facebook },
        { href: "#", label: "LinkedIn", Icon: Linkedin },
        { href: "#", label: "Twitter", Icon: Youtube },
        { href: "#", label: "Instagram", Icon: Instagram },
    ];

    return (
        <footer className="container-padding font-inter">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Logo and Description */}
                <div className="lg:col-span-2 xl:col-span-1">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/favicon.png"
                            alt="Grocery Mart Logo"
                            width={50}
                            height={50}
                            quality={100}
                        />
                        <h2 className="text-2xl font-bold font-quicksand">
                            Daily <span className="text-primary">Pick</span>
                        </h2>
                    </div>
                    <p className="mt-4 text-sm textprimary">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                    </p>
                    <div className="flex gap-4 mt-4">
                        {socialMediaLinks.map(({ href, label, Icon }) => (
                            <a key={label} href={href} aria-label={label}>
                                <Icon className="w-6 h-6 textprimary hover:text-hover btn-transition btn-transition" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold text-lg font-quicksand">
                        Our Company
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm textprimary">
                        <li>
                            <a href="#" className="hover:text-hover btn-transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#categories" className="hover:text-hover btn-transition">
                                Categories
                            </a>
                        </li>
                        <li>
                            <a href="#products" className="hover:text-hover btn-transition">
                                Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="#testimonials"
                                className="hover:text-hover btn-transition"
                            >
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a href="#blogs" className="hover:text-hover btn-transition">
                                Blogs
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg font-quicksand">
                        Services
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm textprimary">
                        <li>
                            <a href="#" className="hover:text-hover btn-transition">
                                Market Research
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-hover btn-transition">
                                Market Analysis
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-hover btn-transition">
                                Customer Reviews
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-hover btn-transition">
                                Products
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg font-quicksand">
                        Help
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm textprimary">
                        <li>
                            <a href="#" className="hover:text-hover btn-transition">
                                Support Center
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-hover btn-transition">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-hover btn-transition">
                                Payment
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-hover btn-transition">
                                Account
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Subscribe Form */}
                <div>
                    <h3 className="font-semibold text-lg font-quicksand">
                        Subscribe
                    </h3>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                        />
                        <button
                            type="submit"
                            className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-hover btn-transition cursor-pointer"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-primary">
                <p>
                    &copy; 2025 Dairy Pick. All Copyrights are reserved by Daily
                    Pick
                </p>
            </div>

            <ToastContainer position="bottom-right" />
        </footer>
    );
}
