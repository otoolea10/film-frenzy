import styled from "styled-components";

export const SubCardStyles = styled.div`
  border-radius: 10px;
  border: 2px solid #27323f;
  margin: 2rem;
  .plan-title {
    height: 50px;
    border-radius: 8px 8px 0 0;
    transform: translateY(-20px);
    background-color: #27323f;
    color: white;
  }
  .plan-title h2 {
    padding-top: 10px;
    text-align: center;
  }
  li {
    font-size: 22px;
  }
  button {
    margin: 1rem;
    color: #27323f;
    border: 2px solid #27323f;
  }
  @media (max-width: 1025px) {
    margin: 1rem;
    li {
      font-size: 20px;
    }
  }
`;
