import styled from "styled-components";

export const OfflineBannerStyles = styled.div`
  height: 80px;
  display: flex;
  color: white;
  background-color: black;
  opacity: 0.85;
  position: fixed;
  z-index: 999;
  width: 100%;
  img {
    margin: 1rem;
    width: 30px;
    height: 30px;
  }
`;
