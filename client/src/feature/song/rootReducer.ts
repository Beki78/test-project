// rootReducer.ts
import { combineReducers } from "redux";
import songsReducer from "./SongSlice";

const rootReducer = combineReducers({
  songs: songsReducer,
});

export default rootReducer;
