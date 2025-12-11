import React from "react";
import { motion } from "framer-motion";
import { CreditCard, RefreshCw, Headphones, Truck } from "lucide-react";

export default function Services() {
    return (
        <section className="container-padding bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="heading capitalize mb-4">
                        We're Best Quality Grocery Shopper
                    </h2>
                    <p className="text-gray-600 font-inter max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur. Urna massa
                        malesuada egestas viverra tincidunt. Pellentesque
                        facilisis dolor massa sit amet integer.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: CreditCard, title: "Multi Payment Methods", desc: "Secure & flexible payment options", stat: "5+", statLabel: "Payment Options" },
                        { icon: RefreshCw, title: "Easy Refund Policy", desc: "Hassle-free returns within 30 days", stat: "30", statLabel: "Days Return" },
                        { icon: Headphones, title: "Customer Support", desc: "24/7 dedicated customer service", stat: "24/7", statLabel: "Support Available" },
                        { icon: Truck, title: "Fast Delivery", desc: "Same-day delivery available", stat: "2hrs", statLabel: "Delivery Time" },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl btn-transition border border-gray-100 text-center cursor-pointer"
                        >
                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-gradient-to-br from-primary to-deepGreen text-white rounded-xl group-hover:scale-110 btn-transition mb-4">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="font-quicksand font-bold text-lg text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="font-inter text-sm text-gray-600 mb-4">
                                    {feature.desc}
                                </p>
                                <div className="mt-auto">
                                    <div className="font-quicksand font-bold text-2xl text-primary">
                                        {feature.stat}
                                    </div>
                                    <div className="font-inter text-xs text-gray-500">
                                        {feature.statLabel}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}