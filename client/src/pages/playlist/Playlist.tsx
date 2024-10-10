import Navbar from "../../components/Navbar/Navbar";
import Table from "../../components/table/Table";
import { useSelector, useDispatch } from "react-redux";
import { RootState, SongType } from "../../types/types";
import Modal from "../../components/modal/Modal";
import { closeModal } from "../../feature/modal/ModalSlice";

const Playlist = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  const handleModalSubmit = (songData: Pick<SongType, "title" | "artist">) => {
    console.log("New Song Data:", songData);
  };


  
  return (
    <>
      <Navbar />
      <Table />
      <Modal
        isOpen={isOpen}
        onClose={() => dispatch(closeModal())}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default Playlist;
