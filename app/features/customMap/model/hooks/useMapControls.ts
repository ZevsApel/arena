import { RefObject } from "react";
import { IMapInstance } from "../customMap.types";
import { MAP_RULES, clampZoom } from "../customMap.rules";

export const useMapControls = ( mapRef: RefObject<IMapInstance | null> ) => {
    const zoomIn = () => {
        const map = mapRef.current;
        if (!map) return;

        const current = map.getZoom();
        const next = clampZoom(current + 1);

        map.setZoom(next, { duration: MAP_RULES.ZOOM_DURATION });
    };

    const zoomOut = () => {
        const map = mapRef.current;
        if (!map) return;

        const current = map.getZoom();
        const next = clampZoom(current - 1);

        map.setZoom(next, { duration: MAP_RULES.ZOOM_DURATION });
    };

    return { zoomIn, zoomOut };
}