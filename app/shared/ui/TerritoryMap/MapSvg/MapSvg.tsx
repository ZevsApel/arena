import { TerritoryMapProps } from "../TerritoryMap.type"

const MapSvg = ({ items }: TerritoryMapProps) => {
    return (
        <div className="map__svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="1106" height="701" viewBox="0 0 1106 701" fill="none">
                {items.flatMap(item =>
                    item.areas.map(area => (
                        <path
                            key={area.id}
                            d={area.path}
                            fill={area.fill}
                        />
                    ))
                )}
            </svg>
        </div>
    )
}

export default MapSvg;