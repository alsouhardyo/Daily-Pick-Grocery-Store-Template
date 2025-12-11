import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen fixed inset-0 z-[9999999] flex-col gap-4">
            <BounceLoader color="#299e60" size={50} />
            <p className="font-quicksand text-lg font-semibold animate-pulse">Loading...</p>
        </div>
    );
}
