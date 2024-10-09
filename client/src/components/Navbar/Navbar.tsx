import { useDispatch } from "react-redux";
import { openModal } from "../../feature/modal/ModalSlice"; // Import the openModal action
import Logo from "../../assets/Black_and_White_Simple_Music_Studio_Logo-removebg-preview.png";
import { Navbarigation, Image, NavLinks, NavLink } from "./NavbarStyle";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleAddMusicClick = () => {
    dispatch(openModal());
  };

  return (
    <Navbarigation>
      <Image src={Logo} alt="music" />
      <NavLinks>
        <NavLink onClick={handleAddMusicClick}>
          Add Music
        </NavLink>
      </NavLinks>
    </Navbarigation>
  );
};

export default Navbar;
