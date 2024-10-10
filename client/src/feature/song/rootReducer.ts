import { combineReducers } from "redux";
import modalReducer from "../modal/ModalSlice"; 
import songsReducer from "./SongSlice"; 


const rootReducer = combineReducers({
  modal: modalReducer, 
  songs: songsReducer,
});

export default rootReducer;
