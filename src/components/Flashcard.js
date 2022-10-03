import {useState} from "react"
import styled from "styled-components"
import setaPlay from "../assets/img/seta_play.png"
import iconeErro from "../assets/img/icone_erro.png"
import iconeCerto from "../assets/img/icone_certo.png"
import iconeQuase from "../assets/img/icone_quase.png"
import setaVirar from "../assets/img/seta_virar.png"


export default function Flashcard(props) {

    const [status, setStatus] = useState({cor:"#333333", icone: setaPlay})
    const [exibeFechado, setExibeFechado] = useState(true);
    const [exibePergunta, setExibePergunta] = useState(false);
    const [exibeResposta, setExibeResposta] = useState(false);


    function exibirPergunta() {
        setExibeFechado(false)
        setExibePergunta(true)
    }

    function exibirResposta() {
      setExibePergunta(false)
      setExibeResposta(true)
    }


  function ficaVermelho() {
            let novoObj = {cor:"#FF3030", icone: iconeErro}
            setStatus(novoObj)
            props.setContador(props.contador + 1)
            setExibeFechado(true)
            setExibeResposta(false)
}

  function ficaLaranja() { 
      let novoObj = {cor:"#FF922E", icone: iconeQuase}
            setStatus(novoObj)
            props.setContador(props.contador + 1)
            setExibeFechado(true)
          setExibeResposta(false)
  }

  function ficaVerde() { 
      let novoObj = {cor:"#2FBE34", icone: iconeCerto}
      setStatus(novoObj)
      props.setContador(props.contador + 1) 
      setExibeFechado(true)
      setExibeResposta(false)
  }

    
    return (
        <>
        {exibeFechado && (
        <CardFechado data-identifier="flashcard" cor={status.cor} onClick={exibirPergunta}>
            <p data-identifier="flashcard-index-item">Pergunta {props.dados.numero}</p>
            <img data-identifier="flashcard-status" src={status.icone}/>
        </CardFechado>
        )}
        {exibePergunta && (
        <Pergunta>
            <p data-identifier="flashcard-question">{props.dados.pergunta}</p>
            <img onClick={exibirResposta} src={setaVirar}/>
        </Pergunta>
        )}
        {exibeResposta && (
        <Resposta>
        <p data-identifier="flashcard-answer">{props.dados.resposta}</p> 
        <BotaoContainer>
              <Botao data-identifier="forgot-btn" cor="#FF3030" onClick={ficaVermelho} >Não lembrei</Botao>
              <Botao data-identifier="almost-forgot-btn" cor="#FF922E" onClick={ficaLaranja}>Quase não lembrei</Botao>
              <Botao data-identifier="zap-btn" cor="#2FBE34" onClick={ficaVerde}>Zap!</Botao>
        </BotaoContainer>
        </Resposta>
        )}
        </>
    )
}

const CardFechado = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
        cursor: pointer;
    }
    p {
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.cor};
    text-decoration-line: ${props => props.cor !== "#333333" ? "line-through" : "none"};
    }

    @media (max-width:360px) {
      width: 80%;
    }
`;

const Pergunta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
  bottom: 10px;
  right: 10px;
  &:hover {
        cursor: pointer;
    }
  }
  @media (max-width:360px) {
      width: 80%;
    }
`;

const Resposta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width:360px) {
      width: 80%;
    }
`;

const BotaoContainer = styled.div`
display: flex;
justify-content: center;
gap: 5px;
border: none;
`;

const Botao = styled.button`
width: 85px;
height: 33px;
border-radius: 5px;
border: none;
background-color: ${props => props.cor};
font-family: 'Recursive', sans-serif;
color: #FFFFFF;
&:hover {
        cursor: pointer;
    }
`;