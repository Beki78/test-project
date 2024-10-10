import { SongType } from "../types/types.ts";


const API_URL = "http://localhost:3000";


//* Fetch Song API
export const fetchSongsApi = async (): Promise<SongType[]> => {
  const response = await fetch(`${API_URL}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch songs,Status: ${response.status}`);
  }
  const data = await response.json();
  return data.music;
};


//* Delete Song API
export const deleteSongApi = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete song. Status: ${response.status}`);
  }
  const data = await response.json();
  return data.music;
};


//* Update Song API
export const updateSongApi = async (updatedSong: SongType, id: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedSong),
  });
  if (!response.ok) {
    throw new Error(`Failed to update song. Status: ${response.status}`);
  }
  const data = await response.json();
  return data.result;
};


//* Create Song API
export const createSongApi = async (newSong: SongType) => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSong),
  });
  if (!response.ok) {
    throw new Error(`Failed to create song. Status: ${response.status}`);
  }
  const data = await response.json();
  return data.result;
};

