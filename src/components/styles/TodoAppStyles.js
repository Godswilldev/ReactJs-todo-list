import styled from "styled-components";
import heroImgDark from "../../images/bg-desktop-dark.jpg";
import heroImgLight from "../../images/bg-desktop-light.jpg";

export const Hero = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s linear;
  background-image: url(${({ theme }) =>
    theme === "LightMode" ? heroImgLight : heroImgDark});
`;

export const Headertext = styled.h1`
  font-size: 4rem;
  letter-spacing: 1rem;
  text-transform: uppercase;
  color: #fafafa;
`;
export const Wrapper = styled.div`
  width: 50%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35vh;
  margin: 0 auto;
  position: relative;
  top: -3rem;
  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 450px) {
    width: 80%;
  }

  @media (max-width: 375px) {
    width: 90%;
  }
`;
