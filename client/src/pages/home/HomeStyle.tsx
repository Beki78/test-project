import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  background-color: #000; /* Use a valid color */
  color: #fff; /* Text color */
  text-align: center;
  padding: 2rem; /* Add padding for better spacing */
  overflow: hidden;
  margin: 0
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: "Arial", sans-serif; /* Adjust font as needed */
`;

export const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px; /* Limit width for readability */
`;

export const CallToAction = styled.a`
  padding: 1rem 2rem;
  background-color: #f39c12; /* Button color */
  color: #000;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e67e22; /* Darker shade on hover */
  }
`;
