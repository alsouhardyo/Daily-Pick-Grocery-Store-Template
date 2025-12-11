"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-9xl font-extrabold text-gray-900">
                        404
                    </h1>
                    <div className="h-1.5 w-12 bg-emerald-500 mx-auto my-6 rounded-full" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-600 mb-8">
                        The page you're looking for doesn't exist or has been
                        moved.
                    </p>

                    <div className="animate-pulse space-y-4 mb-8">
                        <div className="h-2 bg-gray-200 rounded w-3/4 mx-auto" />
                        <div className="h-2 bg-gray-200 rounded w-1/2 mx-auto" />
                    </div>

                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200"
                    >
                        Return Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
