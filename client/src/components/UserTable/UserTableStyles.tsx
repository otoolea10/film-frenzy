import styled from "styled-components";

export const UserTabelStyles = styled.div`
  width: 75%;
  margin: auto;
  padding: 2rem 0;
  table,
  th,
  td {
    border: 1px solid #27323f;
    border-collapse: collapse;
  }
  td,
  th {
    padding: 1rem;
    color: #27323f;
  }
  @media (max-width: 1025px) {
  overflow-x: scroll;
  width:95%;
     margin: 1rem;
      td,
  th {
  font-size: 12px
    padding: 0rem;
    color: #27323f;
  }
  }
  @media (max-width: 767px) {
    overflow-x: scroll;
      td,
  th {
  font-size: 20px
    padding: 0.5rem;
    color: #27323f;
  }
  }
`;
