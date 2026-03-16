import { TerritoryMapProps } from "../TerritoryMap.type";

const MapSidebar = ({ items }: TerritoryMapProps) => {
    return (
        <div className="map__sidebar">
            {
                items.map((item, itemId) => (
                    <div className="map__sidebar-item" key={item.id}>
                        <p className="map__sidebar-name">{item.name}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40" rx="20" fill="#FDFFFF" />
                            <path d="M20 11L18.4138 12.5862L24.6912 18.875H11V21.125H24.6912L18.4138 27.4137L20 29L29 20L20 11Z" fill="#266B84" />
                        </svg>
                    </div>
                ))
            }
        </div>
    );
}

export default MapSidebar;