import styled from "styled-components";

export default function Footer(props) {

    return(
        <>
        <FooterContainer>
            <p data-identifier="flashcard-counter">{props.contador}/8 Concluídos</p>
        </FooterContainer>
        </>
    )
}

const FooterContainer = styled.footer`
width: 100%;
height: 70px;
background-color: white;
display: flex;
flex-direction: column;
gap: 17px;
align-items: center;
justify-content: center;
position: fixed;
left:0;
bottom:0;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
 p {
    font-family: 'Recursive', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
 }
`;
