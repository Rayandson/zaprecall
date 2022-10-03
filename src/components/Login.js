import {useState} from "react"
import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function Login() {
    const [hidden, setHidden] = useState(false)

    function entrar() {
        setHidden(true)
    }

  return (
    <LoginContainer hidden={hidden}>
      <CenterDiv>
        <img src={logo} alt="Logo" />
        <h1>ZapRecall</h1>
        <button onClick={entrar}>Inciar Recall</button>
      </CenterDiv>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  min-height: 100vh;
  display: ${props => props.hidden ? "none" : "flex"};
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
`;

const CenterDiv = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 136px;
    margin-bottom: 20px;
  }
  h1 {
    font-family: "Righteous", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-bottom: 38px;
  }
  button {
    width: 246px;
    height: 54px;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #d70900;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    &:hover {
        cursor: pointer;
    }
  }
`;
