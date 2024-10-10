
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongType, SongsState } from "../../types/types";


const initialState: SongsState = {
  songs: [] as SongType[],
  isLoading: false,
  error: null,
};


//*Song Slice
const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    //*Fetch Song Reducer
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

    //*Delete Song Reducer
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteSong: (state, _action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = null;
    },
    deleteSongSuccess: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      const id = action.payload;
      state.songs = state.songs.filter((song) => song._id !== id);
    },
    deleteSongFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //*Update Song Reducer
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateSong: (state, _action: PayloadAction<SongType>) => {
      state.isLoading = true;
      state.error = null;
    },
    updateSongSuccess: (state, action: PayloadAction<SongType>) => {
      const index = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
      state.isLoading = false;
    },
    updateSongFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //*Create Song Reducer
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createSong: (state, _action: PayloadAction<SongType>) => {
      state.isLoading = true;
      state.error = null;
    },
    createSongSuccess: (state, action: PayloadAction<SongType>) => {
      state.songs.push(action.payload);
      state.isLoading = false;
    },
    createSongFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


export const {
  fetchSong,
  fetchSongSuccess,
  fetchSongsFailure,
  deleteSong,
  deleteSongSuccess,
  deleteSongFailure,
  updateSong,
  updateSongSuccess,
  updateSongFailure,
  createSong,
  createSongSuccess,
  createSongFailure,
} = songsSlice.actions;

export default songsSlice.reducer;
