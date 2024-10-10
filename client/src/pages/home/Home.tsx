import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModal } from "../../feature/modal/ModalSlice";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/modal/Modal";
import { RootState, SongType } from "../../types/types";
import { Section, Title, Description, CallToAction } from "./HomeStyle";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  const handleModalSubmit = (songData: Pick<SongType, "title" | "artist">) => {
    console.log("New Song Data:", songData);
  };



  return (
    <>
      <Navbar />
      <Section>
        <Title>Welcome to Our Music Studio</Title>
        <Description>
          Discover your passion for music with our expert guidance and top-notch
          facilities.
        </Description>
        <CallToAction onClick={() => navigate("/music")}>
          Explore Our Services
        </CallToAction>
      </Section>

      <Modal
        isOpen={isOpen}
        onClose={() => dispatch(closeModal())}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default Home;
