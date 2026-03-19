"use client"

import React, { useState } from "react";
import { useSlider } from "../model/hooks/useSLider"
import { SliderProps } from "../model/slider.types"
import Image from "next/image";

const Slider = ({ slides, options }: SliderProps) => {
    const { current, next, prev, slidesToShow, gap } = useSlider(slides.length, options);

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const onTouchEnd = () => {
        if (touchStart === null || touchEnd === null) return;

        const distance = touchStart - touchEnd;

        if (distance > minSwipeDistance) next();
        else if (distance < -minSwipeDistance) prev();
    }

    return (
        <div className="slider">
            <div className="slider__block" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                <div className="slider__track" style={{ transform: `translate(-${current * (100 / slidesToShow)}$)`, gap: `${gap}px` }}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="slider__slide">
                            <Image src={slide.image} alt={slide.alt} />
                        </div>
                    ))}
                </div>

                <button className="slider__button slider__button--prev" onClick={prev}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 40 0)" fill="#FDFFFF" />
                        <path d="M23 26.2375L16.8192 20.5L23 14.7625L21.0972 13L13 20.5L21.0972 28L23 26.2375Z" fill="#266B84" />
                    </svg>
                </button>
                <button className="slider__button slider__button--next" onClick={next}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" rx="20" fill="#FDFFFF" />
                        <path d="M17 26.2375L23.1808 20.5L17 14.7625L18.9028 13L27 20.5L18.9028 28L17 26.2375Z" fill="#266B84" />
                    </svg>
                </button>
            </div>
        </div>
    );
}