import { SliderOptions } from "./slider.types";

export const validateSliderOptions = (options: SliderOptions, totalSlides: number) => {
    if(!Array.isArray(options)) throw new Error ("options must be object");

    const { gap, slidesToShow, slidesToScroll } = options;

    if(gap !== undefined && (typeof gap !== "number" || gap < 0)) {
        throw new Error("gap must be number >= 0");
    }

    if(slidesToShow !== undefined && (!Number.isInteger(slidesToShow) || slidesToShow < 1)) {
        throw new Error("slidesToShow must be an integer >= 1 ");
    }

    if(slidesToScroll !== undefined && (!Number.isInteger(slidesToScroll) || slidesToScroll < 1)) {
        throw new Error("slidesToScroll must be an integer >= 1");
    }

    if(totalSlides < 0) throw new Error("totalSlides can`t be negative");

    if(slidesToShow !== undefined && slidesToShow > totalSlides) {
        throw new Error("slidesToShow cannot be more than the total number of slides");
    }
}