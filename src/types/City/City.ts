export interface Coordinates {
    lat: number;
    longitude: number;
  };
  
export interface City {
    name: string;
    id: number;
    coordinates: Coordinates;
};
  