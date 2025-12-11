import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

export default function HeroBanner() {
    return (
        <section className="bg-white banner-height flex flex-col justify-center background-photo overflow-x-hidden">
            <div className="mx-auto px-4 md:px-8 xl:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[60%] gap-12 lg:gap-8 items-center justify-start">
                    {/* Left Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-6 lg:space-y-8 flex flex-col justify-center lg:items-start"
                    >
                        {/* Store Logo */}
                        <motion.div 
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="flex items-center gap-2 w-fit rounded-full bg-white px-4 py-2 shadow-lg"
                        >
                            <ShoppingBag className="w-5 h-5 text-emerald-600" />
                            <span className="text-gray-700 text-sm font-medium font-quicksand">
                                The Best Online Grocery Store
                            </span>
                        </motion.div>

                        {/* Hero Text */}
                        <div className="space-y-4 lg:space-y-6 flex flex-col justify-center lg:items-start">
                            <motion.h1 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-quicksand text-gray-900 lg:text-left"
                            >
                                Your One-Stop Shop for{" "}
                                <motion.span 
                                    initial={{ color: "#217448" }}
                                    whileInView={{ color: "#299e60" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                                    className="text-primary"
                                >
                                    Quality Groceries
                                </motion.span>
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-gray-500 max-w-lg font-inter lg:text-left"
                            >
                                Lorem ipsum dolor sit amet consectetur.
                                Tincidunt eu purus risus dolor pharetra
                                tristique pulvinar. Purus id aliquet dolor odio
                                venenatis imperdiet urna.
                            </motion.p>
                        </div>

                        {/* CTA Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="flex flex-wrap gap-4 lg:justify-start"
                        >
                            <motion.a
                                href="#products"
                                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-emerald-700 hover:scale-105 btn-transition font-quicksand"
                            >
                                Shop now
                            </motion.a>
                            <motion.a
                                href="#deals"
                                className="px-6 py-3 text-primary border-2 border-primary rounded-lg hover:bg-emerald-100 hover:text-black hover:scale-105 btn-transition font-quicksand font-semibold"
                            >
                                View Deals
                            </motion.a>
                        </motion.div>

                        {/* Rating Section */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex items-center gap-4 lg:justify-start"
                        >
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: -10 * i, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
                                        className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                                    >
                                        <Image
                                            src={`https://picsum.photos/seed/${i}/100/100`}
                                            alt="Customer"
                                            width={48}
                                            height={48}
                                            sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                                            className="object-cover w-full h-full"
                                        />
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ x: -30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 1 }}
                                    className="w-12 h-12 rounded-full bg-emerald-200 flex items-center justify-center border-2 border-white"
                                >
                                    <span className="text-xs text-emerald-600 font-medium">
                                        +
                                    </span>
                                </motion.div>
                            </div>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1.1 }}
                                className="flex flex-col gap-1"
                            >
                                <div className="font-semibold text-gray-900 font-quicksand">
                                    4.9+ Rating
                                </div>
                                <div className="text-sm text-gray-500 font-inter">
                                    50K+ Trusted Customers
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
