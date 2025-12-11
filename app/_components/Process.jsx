import React from "react";
import { ShoppingBag, ShieldCheck, Truck, RefreshCw } from "lucide-react";

const features = [
    {
        icon: <ShoppingBag className="w-10 h-10 text-primary" />,
        title: "Affordable Shopping", 
        description: "Starting at AED 1",
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        title: "Guaranteed Quality",
        description: "Best Global Brands",
    },
    {
        icon: <Truck className="w-10 h-10 text-primary" />,
        title: "Dubai-wide Free Delivery",
        description: "Orders over AED 75",
    },
    {
        icon: <RefreshCw className="w-10 h-10 text-primary" />,
        title: "Hassle-Free Returns",
        description: "Your Satisfaction Matters Most",
    },
];

export default function Process() {
    return (
        <section className="container-padding bg-gray-50 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-md cursor-pointer"
                    >
                        <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                            {React.cloneElement(feature.icon, {
                                className: "w-8 h-8 text-primary group-hover:scale-105 transition-transform duration-300"
                            })}
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-base font-quicksand text-gray-800 group-hover:text-primary transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600 font-inter leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
