import styled from "styled-components";
import Flashcard from "./Flashcard"

const flashcards = [{numero:1, pergunta: "O que é JSX ?", resposta: "Uma extensão de linguagem do JavaScript"},{numero:2, pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"},
{numero:3, pergunta: "Componentes devem iniciar com __ ", resposta: "letra maiúscula"},{numero:4, pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
{numero:5, pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"},{numero:6, pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências"},
{numero:7, pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes"},{numero:8, pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}];

export default function Flashcards(props) {
    return(
        <>
        <FlashcardsContainer>
        {flashcards.map((obj) => <Flashcard contador={props.contador} setContador={props.setContador} dados={obj}/>)}
        </FlashcardsContainer>
        </>
    )
}

const FlashcardsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 50px;
@media (max-width:360px) {
      width: 100%;
    }
`;