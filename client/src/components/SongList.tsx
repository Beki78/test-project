import { useSelector, useDispatch } from "react-redux";
import { RootState, SongType } from "../types/types";
import { useEffect } from "react";
import { fetchSong } from "../feature/song/SongSlice"; // Import the action

const SongList = () => {
  const { songs, isLoading } = useSelector((state: RootState) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSong());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {songs.map((song: SongType) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default SongList;
