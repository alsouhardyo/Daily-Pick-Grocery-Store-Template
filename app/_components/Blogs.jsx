import React from "react";
import Image from "next/image";
import { Bookmark, Calendar, ArrowRight, Waypoints } from "lucide-react";

const blogPosts = [
    {
        date: "2025-04-07",
        title: "Fresh Fruits to Boost Your Immune System",
        description:
            "Discover the top 5 fruits that can help strengthen your immune system and keep you healthy all year round.",
        commentsNumber: 12,
        imageLink:
            "https://images.unsplash.com/photo-1437750769465-301382cdf094?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEZyZXNoJTIwRnJ1aXRzfGVufDB8fDB8fHww",
    },
    {
        date: "2025-03-25",
        title: "The Benefits of Organic Vegetables",
        description:
            "Learn why organic vegetables are a great choice for your health and the environment, and how to incorporate them into your meals.",
        commentsNumber: 34,
        imageLink:
            "https://images.unsplash.com/photo-1621460249485-4e4f92c9de5d?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T3JnYW5pYyUyMFZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
        date: "2025-02-15",
        title: "How to Save Money on Grocery Shopping",
        description:
            "Get practical tips and tricks to save money while shopping for groceries without compromising on quality.",
        commentsNumber: 18,
        imageLink:
            "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fEdyb2NlcnklMjBTaG9wcGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
];
export default function Blogs() {
    return (
        <section className="container-padding scroll-mt-12" id="blogs">
            {/* Header */}
            <div className="flex flex-col items-center justify-center text-center gap-4 mb-10">
                <h2 className="heading capitalize">Our latest News Feed</h2>
                <p className="font-inter md:w-1/2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere, ab eveniet. Totam sapiente consequuntur dolore
                    numquam assumenda non veritatis ad!
                </p>
            </div>
            {/* Blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {blogPosts.map((post, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer btn-transition"
                    >
                        <Image
                            src={post.imageLink}
                            alt={post.title}
                            width={500}
                            height={400}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <div className="flex items-center gap-2 mb-2 text-gray-500">
                                <Calendar size={16} /> {post.date}
                                <Bookmark size={16} /> {post.commentsNumber}{" "}
                                <span className="font-inter">comments</span>
                            </div>
                            <h3 className="text-lg font-semibold font-quicksand">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 mt-2 font-inter">
                                {post.description}
                            </p>
                            <button className="mt-4 flex items-center gap-2 text-primary hover:text-hover font-inter cursor-pointer">
                                <p className="font-inter">Read More</p>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
