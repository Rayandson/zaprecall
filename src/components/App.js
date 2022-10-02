import {useState} from "react"
import styled from "styled-components";
import Logo from "./Logo";
import Flashcards from "./Flashcards";
import Footer from "./Footer";


// const cores = [{vermelho: "#FF3030"}, {laranja:"#2FBE34"}, {verde: "#2FBE34"}]

// Todo adicionar onClick
export default function App() {
    const [cores, setCores] = useState([{cor:"#333333", ativo:false, concluido:false},{cor:"#333333", ativo:false, concluido:false},{cor:"#333333", ativo:false, concluido:false},{cor:"#333333", ativo:false, concluido:false},{cor:"#333333", ativo:false, concluido:false},{cor:"#333333", ativo:false, concluido:false},{cor:"#333333", ativo:false, concluido:false},{cor:"#333333", ativo:false, concluido:false}])
    return (
        <>
        <AppContainer>
            <Logo />
            <Flashcards cores={cores} setCores={setCores}/>
            <Footer cores={cores} setCores={setCores}/>
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
  margin-bottom: 111px;
`;