// src/components/Table.tsx
import  { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types/types";
import { fetchSong } from "../../feature/song/SongSlice";
import {
  TableContainer,
  TableElement,
  TableHeader,
  TableRow,
  TableData,
  LoadingMessage,
} from "./TableStyle";
import { MdEdit, MdDeleteForever } from "react-icons/md"; // Import icons from react-icons
import { Section } from "../../pages/home/HomeStyle";

const Table = () => {
  const { songs, isLoading } = useSelector((state: RootState) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSong());
  }, [dispatch]);

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
            {songs.map((song) => (
              <TableRow key={song.id}>
                <TableData>{song.title}</TableData>
                <TableData>{song.title}</TableData>
                <TableData>
                  <MdEdit
                    style={{
                      marginRight: "10px",
                      cursor: "pointer",
                      color: "#007bff",
                      fontSize: "1.3rem",
                    }}
                  />
                  <MdDeleteForever
                    style={{
                      cursor: "pointer",
                      color: "red",
                      fontSize: "1.3rem",
                    }}
                  />
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </TableElement>
      </TableContainer>
    </Section>
  );
};

export default Table;
