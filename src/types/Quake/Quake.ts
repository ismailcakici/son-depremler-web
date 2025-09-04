export interface Quake {
  rms: string;                
  eventID: string;            
  provider: string;          
  title: string;            
  date: string;              
  magnitude: number;          
  depth: number;             
  geojson: {
    type: "Point";
    coordinates: [number, number];
  };
  location_properties: {
    closestCity: {
      name: string;
      cityCode: number;
      distance: number;      
      population: number;
    };
    epiCenter: {
      name: string | null;
      cityCode: number;
      population: number;
    };
    closestCities: Array<{
      name: string;
      cityCode: number;
      distance: number;
      population: number;
    }>;
    airports: Array<{
      name: string;
      code: string;
      distance: number;
      coordinates: {
        type: "Point";
        coordinates: [number, number];
      };
    }>;
  };
  rev: string | null;         
  date_time: string;           
  created_at: number;        
  location_tz: string;        
}
