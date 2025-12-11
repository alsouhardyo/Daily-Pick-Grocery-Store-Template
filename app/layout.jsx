import { Quicksand, Inter } from "next/font/google";
import "./globals.css";
import LenisScroll from "./lib/LenisScroll";
import { CartProvider } from "./context/context";

const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata = {
    title: "Daily Pick - Grocery Store Template",
    description: "A modern and responsive grocery store template designed for seamless shopping experiences. Perfect for showcasing products, managing carts, and providing a user-friendly interface.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth overflow-x-hidden">
            <body
                cz-shortcut-listen="true"
                className={`${quicksand.variable} ${inter.variable} antialiased w-screen min-h-screen overflow-hidden`}
            >
                <CartProvider>
                    <LenisScroll />
                    {children}
                </CartProvider>
            </body>
        </html>
    );
}
