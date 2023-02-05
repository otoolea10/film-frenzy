import styled from "styled-components";

const SkinnyBannerStyles = styled.div`
  background-color: #27323f;
  text-align: center;
  height: 100px;
  color: white;
  font-size: 30px;
  h2 {
    transform: translateY(-52px);
  }
  @media (max-width: 767px) {
    height: 90px;
    h2 {
      font-size: 30px;
    }
  }
`;
export default SkinnyBannerStyles;
