import { Quake } from "../../types/Quake/Quake";
import { City } from "../../types/City/City";

const fetchQuakes = async (): Promise<Quake[]> => {
  const apiURL = process.env.REACT_APP_API_URL;

  if (!apiURL) throw new Error("API URL tanımlı değil!");

  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`API Hatası: ${response.status}`);
    }

    const data = await response.json();

    if (data?.result && Array.isArray(data.result)) {
      const quakes: Quake[] = data.result.map((quake: any) => {
        const closestCity: City | null = quake.location_properties?.closestCity
          ? {
              name: quake.location_properties.closestCity.name,
              id: quake.location_properties.closestCity.cityCode,
              coordinates: {
                lat: quake.geojson.coordinates[1],
                longitude: quake.geojson.coordinates[0],
              },
            }
          : null;

        return {
          rms: "",
          eventID: quake.earthquake_id,
          provider: quake.provider,
          title: quake.title,
          date: quake.date_time,
          magnitude: quake.mag,
          depth: quake.depth,
          geojson: quake.geojson,
          location_properties: quake.location_properties,
          rev: quake.rev,
          date_time: quake.date_time,
          created_at: quake.created_at,
          location_tz: quake.location_tz,
          closestCity: closestCity
        };
      });

      return quakes;
    } else {
      console.warn("Deprem verileri beklenen formatta değil:", data);
      return [];
    }
  } catch (error) {
    console.error("Deprem verileri alınamadı:", error);
    return [];
  }
};

export default fetchQuakes;
