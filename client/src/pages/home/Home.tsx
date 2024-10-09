import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Section, Title, Description, CallToAction } from "./HomeStyle";

const Home = () => {
  const navigate = useNavigate();
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
    </>
  );
};

export default Home;
