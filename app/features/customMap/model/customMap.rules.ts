import { TCoords } from "./customMap.types";

export const MAP_RULES = {
    MIN_ZOOM: 10,
    MAX_ZOOM: 18,
    DEFAULT_CENTER: [43.096312, 47.468523] as TCoords,
    DEFAULT_ZOOM: 12,
    ZOOM_DURATION: 300,
} as const;


///////////////////////////////////////////////////////////
// GUARDS
///////////////////////////////////////////////////////////

export const isNumber = (value: unknown): value is number =>
    typeof value === "number" && !Number.isNaN(value);

export const isCoords = (value: unknown): value is TCoords =>
    Array.isArray(value) &&
    value.length === 2 &&
    isNumber(value[0]) &&
    isNumber(value[1]);

export const isValidZoom = (value: unknown): value is number =>
    isNumber(value) && value >= MAP_RULES.MIN_ZOOM && value <= MAP_RULES.MAX_ZOOM;




///////////////////////////////////////////////////////////
// RUNTIME VALIDATORS
///////////////////////////////////////////////////////////

export const assertCoords = (value: unknown): asserts value is TCoords => {
    if (!isCoords(value)) throw new Error('Invalid coords');
}

export const assertZoom = (value: unknown): asserts value is number => {
    if (!isValidZoom(value)) throw new Error('Invalid zoom');
}



///////////////////////////////////////////////////////////
// HELPERS
///////////////////////////////////////////////////////////

export const clampZoom = (zoom: number): number => 
    Math.max(MAP_RULES.MIN_ZOOM, Math.min(MAP_RULES.MAX_ZOOM, zoom));