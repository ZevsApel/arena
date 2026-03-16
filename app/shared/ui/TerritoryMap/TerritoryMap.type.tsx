interface MapArea {
    id: string
    path: string
    fill: string
    note?: string
}

interface TerritoryMapData {
    id: string
    name: string
    areas: MapArea[]
}

export interface TerritoryMapProps {
    items: TerritoryMapData[];
}