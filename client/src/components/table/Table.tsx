import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types/types";
import {
  fetchSong,
  deleteSong,
  updateSong,
} from "../../feature/song/SongSlice";
import {
  TableContainer,
  TableElement,
  TableHeader,
  TableRow,
  TableData,
  LoadingMessage,
} from "./TableStyle";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { Section } from "../../pages/home/HomeStyle";



const Table = () => {
  const { songs, isLoading } = useSelector((state: RootState) => state.songs);
  const dispatch = useDispatch();


  const [editId, setEditId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newArtist, setNewArtist] = useState("");


  useEffect(() => {
    dispatch(fetchSong());
  }, [dispatch]);

  useEffect(() => {
    console.log("Fetched songs:", songs);
  }, [songs]);



  const handleDelete = (id: string) => {
    dispatch(deleteSong(id));
  };


  const handleEdit = (song: { _id: string; title: string; artist: string }) => {
    setEditId(song._id);
    setNewTitle(song.title);
    setNewArtist(song.artist);
  };

  const handleSave = (id: string) => {
    dispatch(updateSong({ _id: id, title: newTitle, artist: newArtist }));
    setEditId(null);
  };




  return (
    <Section>
      <TableContainer>
        <TableElement>
          <TableHeader>
            <TableRow>
              <TableData>Title</TableData>
              <TableData>Artist</TableData>
              <TableData>Actions</TableData>
            </TableRow>
          </TableHeader>
          <tbody>
            {isLoading ? (
              <TableRow>
                <TableData colSpan={3} style={{ textAlign: "center" }}>
                  <LoadingMessage>Loading...</LoadingMessage>
                </TableData>
              </TableRow>
            ) : songs.length === 0 ? (
              <TableRow>
                <TableData colSpan={3} style={{ textAlign: "center" }}>
                  No songs available.
                </TableData>
              </TableRow>
            ) : (
              songs.map((song) => {
                if (!song || !song._id) {
                  console.error("Invalid song data:", song);
                  return null; 
                }
                return (
                  <TableRow key={song._id}>
                    <TableData>
                      {editId === song._id ? (
                        <input
                          type="text"
                          value={newTitle}
                          onChange={(e) => setNewTitle(e.target.value)}
                        />
                      ) : (
                        song.title
                      )}
                    </TableData>
                    <TableData>
                      {editId === song._id ? (
                        <input
                          type="text"
                          value={newArtist}
                          onChange={(e) => setNewArtist(e.target.value)}
                        />
                      ) : (
                        song.artist
                      )}
                    </TableData>
                    <TableData>
                      {editId === song._id ? (
                        <button
                          onClick={() => handleSave(song._id)}
                          style={{
                            backgroundColor: "#28a745", 
                            color: "#fff", 
                            border: "none", 
                            borderRadius: "4px", 
                            padding: "8px 12px",
                            cursor: "pointer", 
                            fontSize: "16px", 
                            transition: "background-color 0.3s",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = "#218838")
                          } 
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "#28a745")
                          } 
                        >
                          Save
                        </button>
                      ) : (
                        <>
                          <MdEdit
                            style={{
                              marginRight: "10px",
                              cursor: "pointer",
                              color: "#007bff",
                              fontSize: "1.3rem",
                            }}
                            onClick={() => handleEdit(song)}
                          />
                          <MdDeleteForever
                            style={{
                              cursor: "pointer",
                              color: "red",
                              fontSize: "1.3rem",
                            }}
                            onClick={() => handleDelete(song._id)}
                          />
                        </>
                      )}
                    </TableData>
                  </TableRow>
                );
              })
            )}
          </tbody>
        </TableElement>
      </TableContainer>
    </Section>
  );
};

export default Table;
