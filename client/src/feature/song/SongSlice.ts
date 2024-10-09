import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongType, SongsState } from "../../types/types";

const initialState: SongsState = {
  songs: [] as SongType[],
  isLoading: false,
  error: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    fetchSong: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSongSuccess: (state, action: PayloadAction<SongType[]>) => {
      state.songs = action.payload; 
      state.isLoading = false; 
      state.error = null; 
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const FETCH_SONGS = "songs/fetchSongs";

export const songActions = {
  fetchSongs: () => ({ type: FETCH_SONGS }),
};

export type SongActionTypes = ReturnType<typeof songActions.fetchSongs>;

export const { fetchSong, fetchSongSuccess, fetchSongsFailure } =
  songsSlice.actions;

export default songsSlice.reducer;
