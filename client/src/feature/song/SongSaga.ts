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
  createSong,
  createSongSuccess,
  createSongFailure,
} from "./SongSlice";
import { fetchSongsApi, deleteSongApi, updateSongApi, createSongApi } from "../../api/api";
import { SongType } from "../../types/types";
import { toast } from "react-toastify";


//*Fetch Song Saga
export function* fetchSongSaga() {
  try {
    const songs: SongType[] = yield call(fetchSongsApi);
    console.log("Fetched songs:", songs);
    yield put(fetchSongSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure((error as Error).message));
  }
}

function* watchFetchSongsSaga() {
  yield takeEvery(fetchSong.type, fetchSongSaga);
}



//*Delete Song Saga
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


function* watchDeleteSongSaga() {
  yield takeEvery(deleteSong.type, deleteSongSaga);
}



//*Update Song Saga
function* updateSongSaga(action: ReturnType<typeof updateSong>) {
  try {
    const updatedSong: SongType = action.payload!;
    const id: string = updatedSong._id; 
    yield call(updateSongApi, updatedSong, id); 
    yield put(updateSongSuccess(updatedSong));
    yield put(fetchSong()); 
    toast.success("Song updated successfully!");
  } catch (error) {
    yield put(updateSongFailure((error as Error).message));
    toast.error("Failed to update the song.");
  }
}

function* watchUpdateSongSaga() {
  yield takeEvery(updateSong.type, updateSongSaga);
}



//*Create Song Saga
function* createSongSaga(action: ReturnType<typeof createSong>) {
  try {
    const newSong: SongType = action.payload!;
    const createdSong: SongType = yield call(createSongApi, newSong);
    yield put(createSongSuccess(createdSong));
    toast.success("Song created successfully!");
     yield put(fetchSong());
  } catch (error) {
    yield put(createSongFailure((error as Error).message));
    toast.error("Failed to create the song.");

  }
}

function* watchCreateSongSaga() {
  yield takeEvery(createSong.type, createSongSaga);
}



//*Root Song Saga
export default function* rootSaga() {
  yield all([
    watchFetchSongsSaga(),
    watchDeleteSongSaga(),
    watchUpdateSongSaga(),
    watchCreateSongSaga(),
  ]);
}
