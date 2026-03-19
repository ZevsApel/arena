export interface Slide {
    id: number;
    image: string;
    alt: string;
}

export interface SliderOptions {
    gap?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
}

export interface SliderProps {
    slides: Slide[];
    options?: SliderOptions;
}

export interface SliderHookState {
    current: number;
    next: () => void;
    prev: () => void;
    goTo: (index: number) => void;
    slidesToShow: number;
    gap: number;
}