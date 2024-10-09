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

    if (isLoading) {
      return <LoadingMessage>Loading...</LoadingMessage>;
    }

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
              {songs.length === 0 ? (
                <TableRow>
                  <TableData colSpan={3} style={{ textAlign: "center" }}>
                    No songs available.
                  </TableData>
                </TableRow>
              ) : (
                songs.map((song) => (
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
                        <button onClick={() => handleSave(song._id)}>Save</button>
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
                ))
              )}
            </tbody>
          </TableElement>
        </TableContainer>
      </Section>
    );
  };

  export default Table;
