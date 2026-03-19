import { useCallback, useState } from "react";
import { SliderHookState, SliderOptions } from "../slider.types";
import { validateSliderOptions } from "../slider.rules";

export const useSlider = (totalSlides: number, options: SliderOptions = {}): SliderHookState => {

    validateSliderOptions(options, totalSlides);

    const slidesToShow = options.slidesToShow ?? 1;
    const slidesToScroll = options.slidesToScroll ?? 1;
    const gap = options.gap ?? 0;

    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent(prev => {
            if (prev < totalSlides - slidesToShow) {
                return Math.min(prev + slidesToScroll, totalSlides - slidesToShow);
            }
            return 0;
        });
    }, [totalSlides, slidesToScroll, slidesToShow]);

    const prev = useCallback(() => {
        setCurrent(prev => {
            if (prev > 0) {
                return Math.max(prev - slidesToScroll, 0);
            }
            return totalSlides - slidesToShow;
        });
    }, [totalSlides, slidesToScroll, slidesToShow]);

    const goTo = useCallback((index: number) => {
        if (index < 0 || index > totalSlides - slidesToShow) return;
        setCurrent(index);
    }, [totalSlides, slidesToShow]);

    return { current, next, prev, goTo, slidesToShow, gap }
}