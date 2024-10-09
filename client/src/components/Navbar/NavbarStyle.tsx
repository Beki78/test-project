import styled from "@emotion/styled";

export const Navbarigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;
  border-radius: 6rem;
  background-color: #000; /* Use a valid color */
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2); /* Lighter shadow */
  position: fixed; /* Make the navbar fixed */
  top: 0; /* Position at the top */
  left: 0;
  right: 0;
  z-index: 1000;
  margin: 1.3rem 2rem 
  `;

export const Image = styled.img`
  height: 6rem;
  width: 6rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem; /* Space between links */
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #f39c12; /* Change to a different color on hover */
  }
`;
