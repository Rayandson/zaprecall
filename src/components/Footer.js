import styled from "styled-components";

export default function Footer(props) {

    function ficaVermelho() {
        let novoArray = [...props.cores]
        for(let i=0; i<novoArray.length; i++){
            if(novoArray[i].ativo === true && novoArray[i].concluido === false){
                novoArray[i].cor = "#FF3030"
                novoArray[i].concluido = true
                props.setCores([...novoArray]); 
            }
        }  
    }

    function ficaLaranja() {
        let novoArray = [...props.cores]
        for(let i=0; i<novoArray.length; i++){
            if(novoArray[i].ativo === true && novoArray[i].concluido === false){
                novoArray[i].cor = "#FF922E"
                novoArray[i].concluido = true
                props.setCores([...novoArray]); 
            }
        }  
    }

    function ficaVerde() {
        let novoArray = [...props.cores]
        for(let i=0; i<novoArray.length; i++){
            if(novoArray[i].ativo === true && novoArray[i].concluido === false){
                novoArray[i].cor = "#2FBE34"
                novoArray[i].concluido = true
                props.setCores([...novoArray]); 
            }
        }  
    }

    return(
        <>
        <FooterContainer>
            <BotaoContainer>
                <Botao cor="#FF3030" onClick={ficaVermelho} >Não lembrei</Botao>
                <Botao cor="#FF922E" onClick={ficaLaranja}>Quase não lembrei</Botao>
                <Botao cor="#2FBE34" onClick={ficaVerde}>Zap!</Botao>
            </BotaoContainer>
            <p>0/8 Concluídos</p>
        </FooterContainer>
        </>
    )
}

const FooterContainer = styled.footer`
width: 100%;
height: 111px;
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

const BotaoContainer = styled.div`
display: flex;
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
`;