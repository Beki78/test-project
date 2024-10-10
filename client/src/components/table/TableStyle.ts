import styled from "@emotion/styled";

export const TableContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 10rem auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  overflow-x: auto;
  max-height: 75vh;

  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`;

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #e0e0e0;
  min-width: 600px; 

  @media (max-width: 768px) {
    min-width: 400px; 
  }
`;

export const TableHeader = styled.thead`
  background-color: #d0d0d0;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableData = styled.td`
  padding: 1rem; 
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: black;

  @media (max-width: 768px) {
    padding: 0.5rem; 
    font-size: 0.9rem; 
  }
`;

export const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #000;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
