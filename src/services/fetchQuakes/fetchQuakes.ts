import getFormattedDates from "../../utils/dates/dateFunctions";
import { Quake } from "../../types/Quake/Quake";

const fetchQuakes = async (): Promise<Quake[]> => {
    const baseURL = process.env.REACT_APP_API_URL;
    const { endDate, startDate } = getFormattedDates();
    
    const apiUrl = `${baseURL}?start=${startDate}&end=${endDate}&orderby=timedesc`;
    console.log("API URL:", apiUrl);
    
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`API Hatası: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && Array.isArray(data)) {
            const quakes: Quake[] = data.map((quake: any) => ({
                rms: quake.rms,
                eventID: quake.eventID,
                location: quake.location,
                latitude: quake.latitude,
                longitude: quake.longitude,
                depth: quake.depth,
                type: quake.type,
                magnitude: quake.magnitude,
                country: quake.country,
                province: quake.province,
                district: quake.district,
                neighborhood: quake.neighborhood,
                date: quake.date,
                isEventUpdate: quake.isEventUpdate,
                lastUpdateDate: quake.lastUpdateDate
            }));

            return quakes;
        } else {
            console.log("Deprem verileri beklenilen formatta değil:", data);
            return [];
        }
    } catch (error) {
        console.error('Deprem verileri alınamadı:', error);
        return [];
    }
};

export default fetchQuakes;
