import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  fetchSong,
  fetchSongSuccess,
  fetchSongsFailure,
  deleteSong,
  deleteSongSuccess,
  deleteSongFailure,
  updateSong,
  updateSongSuccess,
  updateSongFailure,
} from "./SongSlice";
import { fetchSongsApi, deleteSongApi, updateSongApi } from "../../api/api";
import { SongType } from "../../types/types";
import { toast } from "react-toastify";

// Saga to fetch songs
export function* fetchSongSaga() {
  try {
    const songs: SongType[] = yield call(fetchSongsApi);
    console.log("Fetched songs:", songs);
    yield put(fetchSongSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure((error as Error).message));
  }
}

// Watcher saga for fetching songs
function* watchFetchSongsSaga() {
  yield takeEvery(fetchSong.type, fetchSongSaga);
}

// Saga to delete a song
function* deleteSongSaga(action: ReturnType<typeof deleteSong>) {
  try {
    const id: string = action.payload!;
    yield call(deleteSongApi, id);
    yield put(deleteSongSuccess(id));
    toast.success("Song deleted successfully!");
  } catch (error) {
    yield put(deleteSongFailure((error as Error).message));
     toast.error("Failed to delete the song."); 
  }
}

// Watcher saga for deleting songs
function* watchDeleteSongSaga() {
  yield takeEvery(deleteSong.type, deleteSongSaga);
}

function* updateSongSaga(action: ReturnType<typeof updateSong>) {
  try {
    const updatedSong: SongType = action.payload!;
    const id: string = updatedSong._id; // Extract the ID from the updatedSong
    yield call(updateSongApi, updatedSong, id); // Call the API with both parameters
    yield put(updateSongSuccess(updatedSong)); // Dispatch success action
    yield put(fetchSong()); // Fetch songs again to update the state
    toast.success("Song updated successfully!");
  } catch (error) {
    yield put(updateSongFailure((error as Error).message));
    toast.error("Failed to update the song.");
  }
}

function* watchUpdateSongSaga() {
  yield takeEvery(updateSong.type, updateSongSaga);
}

// Root saga
export default function* rootSaga() {
  yield all([
    watchFetchSongsSaga(),
    watchDeleteSongSaga(),
    watchUpdateSongSaga(),
  ]);
}
