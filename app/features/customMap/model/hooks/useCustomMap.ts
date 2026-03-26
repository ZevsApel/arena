'use client'

import { useEffect, useRef } from "react"
import { IMapInstance, IYmaps } from "../customMap.types";
import { MAP_RULES, assertCoords } from "../customMap.rules";


export const useCustomMap = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<IMapInstance | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const init = (yamaps: IYmaps) => {
            yamaps.ready(() => {
                if (!mapRef.current) return;

                const map = new yamaps.Map(mapRef.current, {
                    center: MAP_RULES.DEFAULT_CENTER,
                    zoom: MAP_RULES.DEFAULT_ZOOM,
                    controls: [],
                });

                map.options.set("suppressMapOpenBlock", true);
                map.options.set("yandexMapDisablePoiInteractivity", true);

                map.behaviors.enable("scrollZoom");

                const placemark = new yamaps.Placemark(
                    MAP_RULES.DEFAULT_CENTER,
                    {},
                    {
                        iconLayout: "default#image",
                        iconImageHref: "/next.svg",
                        iconImageSize: [48, 48],
                        iconImageOffset: [-24, -48],
                    }
                );

                map.geoObjects.add(placemark);

                mapInstance.current = map;
            });
        };

        if (window.ymaps) {
            init(window.ymaps)
        } else {
            const script = document.createElement("script");
            script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
            script.async = true;

            script.onload = () => {
                if (!window.ymaps) return;
                init(window.ymaps);
            };

            document.body.appendChild(script);
        }
    }, []);

    return { mapRef, mapInstance };
}