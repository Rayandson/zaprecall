import {useState} from "react"
import styled from "styled-components";
import Logo from "./Logo";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
import setaPlay from "../assets/img/seta_play.png"
import iconeErro from "../assets/img/icone_erro.png"
import iconeCerto from "../assets/img/icone_certo.png"
import iconeQuase from "../assets/img/icone_quase.png"


// const cores = [{vermelho: "#FF3030"}, {laranja:"#2FBE34"}, {verde: "#2FBE34"}]

// Todo adicionar onClick
export default function App() {
    const [cores, setCores] = useState([{cor:"#333333", ativo:false, concluido:false, icone: setaPlay},{cor:"#333333", ativo:false, concluido:false, icone: setaPlay},{cor:"#333333", ativo:false, concluido:false, icone: setaPlay},{cor:"#333333", ativo:false, concluido:false, icone: setaPlay},{cor:"#333333", ativo:false, concluido:false, icone: setaPlay},{cor:"#333333", ativo:false, concluido:false, icone: setaPlay},{cor:"#333333", ativo:false, concluido:false, icone: setaPlay},{cor:"#333333", ativo:false, concluido:false, icone: setaPlay}])
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