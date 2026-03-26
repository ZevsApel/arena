'use client'

import { useCustomMap } from "../../model/hooks/useCustomMap"
import { useMapControls } from "../../model/hooks/useMapControls";
import MapControls from "../MapControls/MapControls";

const CustomMap = () => {
    const { mapRef, mapInstance } = useCustomMap();
    const { zoomIn, zoomOut } = useMapControls(mapInstance);

    return (
        <div className="custom-map">
            <div className="custom-map__body" ref={mapRef} style={{ width: '500px', height: '500px' }}></div>
            <MapControls zoomIn={zoomIn} zoomOut={zoomOut} />
        </div>
    );
}

export default CustomMap;