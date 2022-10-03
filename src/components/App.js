import {useState} from "react"
import styled from "styled-components";
import Login from "./Login"
import Logo from "./Logo";
import Flashcards from "./Flashcards";
import Footer from "./Footer";

export default function App() {
   
    const[contador, setContador] = useState(0)
    
    return (
        <>
        <Login />
        <AppContainer>
            <Logo />
            <Flashcards contador={contador} setContador={setContador}/>
            <Footer contador={contador}/>
        </AppContainer>
        </>
    )
}

const AppContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  margin-bottom: 70px;
`;