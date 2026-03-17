import { useCallback, useState } from "react"
import { SliderOptionsData } from "../slider.types";

export const useSlider = (totalSlides: number, { options }: SliderOptionsData) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Default values
    const { gap = 0, slidesToShow = 1, slidesToScroll = 1 } = options;

    const nextSlide = useCallback(() => {
        if (currentSlide < totalSlides - slidesToShow) {
            setCurrentSlide(prev => Math.min(prev + slidesToScroll, totalSlides - slidesToShow));
        } else {
            setCurrentSlide(0);
        }
    }, [currentSlide, totalSlides, slidesToShow, slidesToScroll]);

    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => Math.max(prev - slidesToScroll, 0));
        } else {
            setCurrentSlide(totalSlides - slidesToShow);
        }
    }, [currentSlide, totalSlides, slidesToShow, slidesToScroll]);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(Math.max(0, Math.min(index, totalSlides - slidesToShow)));
    }, [totalSlides, slidesToShow]);

    return { currentSlide, nextSlide, prevSlide, goToSlide, gap, slidesToShow };
}