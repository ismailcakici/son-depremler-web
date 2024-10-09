import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { Quake } from "../types/Quake/Quake";
import fetchQuakes from "../services/fetchQuakes/fetchQuakes";

interface QuakeContextType {
  quakes: Quake[];
  loading: boolean;
  getQuakes: () => Promise<void>;
}

const QuakeContext = createContext<QuakeContextType>({
  quakes: [],
  loading: true,
  getQuakes: async () => {},
});

interface QuakeProviderProps {
  children: ReactNode;
}

export const QuakeProvider: React.FC<QuakeProviderProps> = ({ children }) => {
  const [quakes, setQuakes] = useState<Quake[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getQuakes = async () => {
    setLoading(true);
    try {
      const data = await fetchQuakes();
      setQuakes(data);
    } catch (error) {
      console.error("Deprem verileri çekilirken bir hata oluştu:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuakes();
  }, []);

  return (
    <QuakeContext.Provider value={{ quakes, loading, getQuakes }}>
      {children}
    </QuakeContext.Provider>
  );
};

export const useQuakeContext = () => useContext(QuakeContext);
