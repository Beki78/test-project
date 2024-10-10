import styled from "@emotion/styled";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000; 
  color: #f39c12; 
  text-align: center;
  padding: 2rem;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
