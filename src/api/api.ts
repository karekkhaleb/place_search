import { PlacesResponse } from '../types';

const API_URL = import.meta.env.VITE_API_URL;

const searchPlaces = async (query: string): Promise<PlacesResponse> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${import.meta.env.VITE_API_USERNAME}:${import.meta.env.VITE_API_PASSWORD}`),
    },
    body: JSON.stringify({ search: query }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};

export default searchPlaces;
