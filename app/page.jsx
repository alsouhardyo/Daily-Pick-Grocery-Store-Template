"use client";
import React, { useState, useEffect } from "react";
import Header from "./_components/Header";
import HeroBanner from "./_components/HeroBanner";
import Categories from "./_components/Categories";
import Products from "./_components/Products";
import Deals from "./_components/Deals";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";
import Blogs from "./_components/Blogs";
import Process from "./_components/Process";
import Footer from "./_components/Footer";
import Loading from "./loading";

const page = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Simulate a 1.5s loading time

        return () => clearTimeout(timer); 
    }, [loading]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Header />
                    <HeroBanner />
                    <Categories />
                    <Products />
                    <Deals />
                    <Services />
                    <Testimonials />
                    <Blogs />
                    <Process />
                    <Footer />
                </>
            )}
        </>
    );
};

export default page;
