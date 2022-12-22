import styled from "styled-components";
import logopluscadastro from "../assets/logopluscadastro.png";
import logogoldcadastro from "../assets/logogoldcadastro.png";
import logopremiumcadastro from "../assets/logopremiumcadastro.png";

export default function TelaPlanos() {

    const logos = [logopluscadastro, logogoldcadastro, logopremiumcadastro];

    return (
        <>
            <TituloPlanos><p>Escolha seu Plano</p></TituloPlanos>

            <ConteudoPlanos>

                <ButtonCadastro>
                    <img src={logos[0]} />
                    <h1>+</h1>
                    <h2>R$ 39,99</h2>

                </ButtonCadastro>


                <ButtonCadastro>
                    <img src={logos[1]} />
                    <h1>+</h1>
                    <h2>R$ 69,99</h2>

                </ButtonCadastro>


                <ButtonCadastro>
                    <img src={logos[2]} />
                    <h1>+</h1>
                    <h2>R$ 99,99</h2>

                </ButtonCadastro>

                
            </ConteudoPlanos>
        </>
    )
}


const TituloPlanos = styled.div`
display: flex;
justify-content: center;
margin-top: 29px;
p{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 32px;
    color: #FFFFFF;
}
`

const ConteudoPlanos = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 35px;
`

const ButtonCadastro = styled.button`
width: 290px;
height: 180px;
background-color: #0E0E13;
border: 3px solid #7E7E7E;
border-radius: 12px;
margin-bottom: 10px;
display:flex;
align-items: center;
h1{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 100px;
    color:#FF4791;
    margin-top: 50px;
}

h2{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color:#FFFFFF;
    margin-left: 20px;
}
`
