import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 360px;
  margin: 60px auto;
  padding: 10px;
  border-collapse: collapse;

  & th,
  & td {
    padding: 10px;
    text-align: center;
    border: 1px solid white;    
  }

  & th {
    background-color: #00BCD5;
    font-weight: bold;
    color: white;
  }

  & td {
   
    outline: 1px solid #EEEEEE;
  }
  
  & td::first-letter {
    text-transform: uppercase;
  }

  & tr:nth-of-type(even) {
    background-color: #00BCD5;
  }

  & tr:nth-of-type(2n) {
    background-color: #ECF1F4;
  }

  & tr {
    background-color: white;
  }
  
  & tr:last-of-type td {
    border-bottom: none;
  }

  & td:hover,
  & td:hover ~ td {
    background-color: lightyellow;
  }
`;
