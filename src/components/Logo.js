import styled from "styled-components"
import logo from "../assets/img/logo.png"

export default function Logo() {
  return (
  <LogoContainer>
    <img src={logo} alt="Logo"/>
    <h1>ZapRecall</h1>
  </LogoContainer>
  )
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
    @media (max-width:330px) {
      width: 40px;
    }
  }

  h1 {
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
    @media (max-width:330px) {
      font-size:30px;
    }
  }
`;
