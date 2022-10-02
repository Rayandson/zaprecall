import {useState} from "react"
import styled from "styled-components"
import setaVirar from "../assets/img/seta_virar.png"


export default function Flashcard(props) {

    const [exibeFechado, setExibeFechado] = useState(true);
    const [exibePergunta, setExibePergunta] = useState(false);
    const [exibeResposta, setExibeResposta] = useState(false);


    function exibirPergunta() {
        setExibeFechado(false)
        setExibePergunta(true)
        let novoArray = [...props.cores];
        for(let i = 0; i<novoArray.length; i++) {
          if(i+1 == props.dados.numero) {
          novoArray[i].ativo = true;
          props.setCores([...novoArray])
          }
        }
    }

    function exibirResposta() {
      setExibePergunta(false)
      setExibeResposta(true)
    }

    function FecharCard() {
      setExibeFechado(true)
      setExibeResposta(false)
    }

    
    return (
        <>
        {exibeFechado && (
        <CardFechado cor={props.cores[props.indice].cor} onClick={exibirPergunta}>
            <p>Pergunta {props.dados.numero}</p>
            <img src={props.cores[props.indice].icone}/>
        </CardFechado>
        )}
        {exibePergunta && (
        <Pergunta>
            <p>{props.dados.pergunta}</p>
            <img onClick={exibirResposta} src={setaVirar}/>
        </Pergunta>
        )}
        {exibeResposta && (
        <Resposta onClick={FecharCard}>
        <p>{props.dados.resposta}</p> 
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
    p {
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.cor};
    text-decoration-line: ${props => props.cor !== "#333333" ? "line-through" : "none"};
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

`;