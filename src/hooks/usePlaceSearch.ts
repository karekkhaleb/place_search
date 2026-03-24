import { useState, useCallback } from 'react';
import { PlacesResponse, Place } from '../types';
import searchPlaces from '../api/api';

interface UsePlaceSearchReturn {
  results: Place[];
  isLoading: boolean;
  error: string | null;
  search: (query: string) => Promise<void>;
  clearResults: () => void;
}

const usePlaceSearch = (): UsePlaceSearchReturn => {
  const [results, setResults] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      setError('Please enter a search query');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response: PlacesResponse = await searchPlaces(query);
      setResults(response.results);
    } catch (err) {
      setError('Failed to fetch places. Please try again.');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearResults = useCallback(() => {
    setResults([]);
    setError(null);
  }, []);

  return { results, isLoading, error, search, clearResults };
};

export default usePlaceSearch;
