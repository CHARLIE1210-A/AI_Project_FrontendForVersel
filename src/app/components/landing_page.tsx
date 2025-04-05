"use client";

import Hero from "./hero";
import Features from "./features";
import { useState, useEffect, UIEvent } from "react";
import Image from "next/image";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpeg",
];

const imageSizes = [
  { width: 250, height: 180 },
  { width: 300, height: 200 },
  { width: 200, height: 150 },
  { width: 350, height: 250 },
  { width: 280, height: 190 },
  { width: 320, height: 220 },
];

export default function LandingPage() {
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 4));

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 10) {
      setVisibleImages((prev) => {
        const nextImages = images.slice(prev.length, prev.length + 2);
        return [...prev, ...nextImages];
      });
    }
  };

  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-100 p-6">
      <div className="flex bg-white shadow-lg rounded-xl overflow-hidden h-screen max-w-full">
        {/* Left Section */}
        <div className="p-8 w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">
            Stable Diffusion 3 Medium.
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Is our most advanced text-to-image AI model with two billion
            parameters, excelling in photorealism, handling complex prompts,
            generating clear text, and offering unparalleled creative
            possibilities.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-black text-white rounded-md text-sm">
              Get Started with API
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm">
              Show Info
            </button>
          </div>
        </div>

        {/* Right Section - Scrollable Image Grid */}
        <div
          className="w-1/2 overflow-y-auto h-3/4 p-4"
          onScroll={handleScroll}
        >
          <div className="grid grid-cols-2 gap-3">
            {visibleImages.map((src, index) => {
              const { width, height } = imageSizes[index % imageSizes.length];
              return (
                <Image
                  key={index}
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={width}
                  height={height}
                  className="rounded-lg object-cover"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
