export interface SliderProps {
    id: number;
    currentSlide: number;
    onNext: () => void;
    onPrev: () => void;
    items: string[];
}

interface SliderOptionsProps {
    gap?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
}

export interface SliderOptionsData {
    options: SliderOptionsProps;
}