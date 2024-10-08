import { Quake } from "../Quake/Quake";

export interface MapProps {
    lat: number;
    lon: number;
    zoom: number;
    quakes: Quake[];
  }
  