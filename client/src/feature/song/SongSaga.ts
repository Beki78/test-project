import { call, put, takeEvery, all } from "redux-saga/effects"; // Added 'all'
import { fetchSong, fetchSongSuccess, fetchSongsFailure } from "./SongSlice";
import { fetchSongsApi } from "../../api/api";
import { SongType } from "../../types/types";

export function* fetchSongSaga() {
  try {
    const songs: SongType[] = yield call(fetchSongsApi);
    console.log("Fetched songs:", songs)
    yield put(fetchSongSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure((error as Error).message)); 
  }
}

function* watchFetchSongsSaga() {
  yield takeEvery(fetchSong.type, fetchSongSaga); 
}

export default function* rootSaga() {
  yield all([watchFetchSongsSaga()]);
}
