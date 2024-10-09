import Navbar from "../../components/Navbar/Navbar";
import { Section, Title, Description, CallToAction } from "./HomeStyle";

const Home = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Title>Welcome to Our Music Studio</Title>
        <Description>
          Discover your passion for music with our expert guidance and top-notch
          facilities.
        </Description>
        <CallToAction href="#services">Explore Our Services</CallToAction>
        
      </Section>
    </>
  );
};

export default Home;
