export type TCoords = readonly [number, number];

export interface IMapInstance {
    setZoom: (zoom: number, options?: { duration?: number }) => void;
    getZoom: () => number;
    options: {
        set: (key: string, value: unknown) => void;
    };
    behaviors: {
        enable: (name: 'scrollZoom') => void;
    };
    geoObjects: {
        add: (obj: unknown) => void;
    };
}

export interface IPlacemarkOptions {
    iconLayout: 'default#image';
    iconImageHref: string;
    iconImageSize: readonly [number, number];
    iconImageOffset: readonly [number, number];
}

export interface IYmaps {
    ready: (cb: () => void) => void;
    Map: new (
        el: HTMLElement,
        state: {
            center: TCoords;
            zoom: number;
            controls: readonly string[];
        }
    ) => IMapInstance;
    Placemark: new (
        coords: TCoords,
        props: Record<string, unknown>,
        options: IPlacemarkOptions
    ) => unknown;
}

declare global {
    interface Window {
      ymaps?: IYmaps;
    }
  }