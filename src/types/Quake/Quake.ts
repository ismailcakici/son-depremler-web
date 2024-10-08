export interface Quake {
    rms: string;          
    eventID: string;     
    location: string;    
    latitude: string;    
    longitude: string;   
    depth: string;      
    type: string;        
    magnitude: string;   
    country: string;     
    province: string;    
    district: string;    
    neighborhood: string; 
    date: string;        
    isEventUpdate: boolean; 
    lastUpdateDate: string | null;
}
