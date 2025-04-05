"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide from './slide';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
      title: "🚀 AI Innovation",
      subtitle: "Discover the power of Artificial Intelligence",
      image: "/images/image1.jpg",
      buttonText: "Learn More",
      bgColor: "bg-gradient-to-r from-blue-500 to-purple-600",
    },
    {
      title: "🎨 Creative AI",
      subtitle: "Generate stunning visuals with AI models",
      image: "/images/image2.jpg",
      buttonText: "Get Started",
      bgColor: "bg-gradient-to-r from-pink-500 to-red-600",
    },
    {
      title: "🤖 AI Assistants",
      subtitle: "Enhance productivity with smart AI bots",
      image: "/images/image3.jpg",
      buttonText: "Try Now",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-600",
    },
    {
      title: "🌎 AI & Future",
      subtitle: "How AI is shaping the world",
      image: "/images/image4.jpg",
      buttonText: "Explore",
      bgColor: "bg-gradient-to-r from-yellow-500 to-orange-600",
    },
  ];
  
export default function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
      setIndex((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };
  
    return (
      <div className="relative w-full h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className={`absolute w-full h-full flex flex-col items-center justify-center text-center ${slides[index].bgColor} p-10 rounded-3xl shadow-lg`}
          >
            <h1 className="text-4xl font-bold text-white">{slides[index].title}</h1>
            <p className="text-lg text-white opacity-90 mt-4">{slides[index].subtitle}</p>
            <Image
              src={slides[index].image}
              alt={slides[index].title}
              width={500}
              height={300}
              className="mt-6 rounded-lg shadow-xl"
            />
            <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg text-lg font-semibold shadow-lg">
              {slides[index].buttonText}
            </button>
          </motion.div>
        </AnimatePresence>
  
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-5 text-white bg-black/50 p-3 rounded-full"
        >
          ⬅
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 text-white bg-black/50 p-3 rounded-full"
        >
          ➡
        </button>
      </div>
    );
}
