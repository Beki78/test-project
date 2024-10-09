import styled from "@emotion/styled";

export const TableContainer = styled.div`
  max-width: 800px;
  min-width: 600px;
  margin: 10rem auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: scroll; 
  max-height: 75vh; 
`;

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #e0e0e0; 
`;

export const TableHeader = styled.thead`
  background-color: #d0d0d0;/* Slightly darker gray for the header */
  
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2; /* Light gray for alternating rows */
  }
`;

export const TableData = styled.td`
  padding: 2rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: black; 
  
`;

export const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  font-size: 1.5rem; 
  color: #f39c12;
  font-weight: bold;
`;