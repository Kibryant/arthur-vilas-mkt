"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const images = [
    "/IMG_0707.webp",
    "/IMG_0922.webp",
    "/IMG_0942.webp",
    "/IMG_0943.webp",
    "/IMG_0944.webp",
    "/IMG_0945.webp",
    "/IMG_0946.webp",
    "/IMG_0947.webp",
]

export const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, [])

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [isAutoPlaying, nextSlide])

    return (
        <div
            className="relative w-full max-w-lg mx-auto group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Main Stage */}
            <div className="relative aspect-[9/16] overflow-hidden rounded-3xl shadow-2xl border-8 border-gray-800 bg-gray-900">
                <div
                    className="flex transition-transform duration-500 ease-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((src, index) => (
                        <div key={index} className="min-w-full h-full relative">
                            <Image
                                src={src}
                                alt={`Prova Social ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* Overlays/Gradients for depth */}
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[1.25rem]"></div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-[-15px] md:left-[-35px] top-1/2 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all md:opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 hover:scale-110 active:scale-95"
                aria-label="Anterior"
            >
                <FaChevronLeft size={18} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-[-15px] md:right-[-35px] top-1/2 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all md:opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 hover:scale-110 active:scale-95"
                aria-label="Próximo"
            >
                <FaChevronRight size={18} />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "bg-emerald-500 w-6" : "bg-gray-300"
                            }`}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
