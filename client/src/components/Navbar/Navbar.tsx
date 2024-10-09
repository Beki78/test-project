import { useDispatch } from "react-redux";
import { openModal } from "../../feature/modal/ModalSlice"; 
import Logo from "../../assets/Black_and_White_Simple_Music_Studio_Logo-removebg-preview.png";
import { Navbarigation, Image, NavLinks, NavLink } from "./NavbarStyle";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleAddMusicClick = () => {
    dispatch(openModal());
  };
  const navigate = useNavigate();
  return (
    <Navbarigation>
      <Image src={Logo} alt="music" onClick={() => navigate("/")} />
      <NavLinks>
        <NavLink onClick={handleAddMusicClick}>Add Music</NavLink>
      </NavLinks>
    </Navbarigation>
  );
};

export default Navbar;
