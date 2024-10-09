import { SongType } from "../types/types.ts";

const API_URL = "http://localhost:3000/";


export const fetchSongsApi = async (): Promise<SongType[]> => {
  const response = await fetch(`${API_URL}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch songs,Status: ${response.status}`);
  }
  const data = await response.json();
  return data.music;
};


