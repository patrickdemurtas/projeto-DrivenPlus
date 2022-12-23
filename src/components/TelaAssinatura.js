import styled from "styled-components"
import logopluscadastro from "../assets/logopluscadastro.png";
import logogoldcadastro from "../assets/logogoldcadastro.png";
import logopremiumcadastro from "../assets/logopremiumcadastro.png";
import beneficios from "../assets/beneficios.png";
import preco from "../assets/preco.png";
import iconevoltar from "../assets/iconevoltar.png"
import { Link } from "react-router-dom";

export default function TelaAssinatura() {

    const logos = [logopluscadastro, logogoldcadastro, logopremiumcadastro];
    const icones = [beneficios, preco, iconevoltar];

    return (
        <>
            <Link to="/subscriptions">
                <IconeVoltar><img src={icones[2]} /></IconeVoltar>
            </Link>

            <LogoAssinatura>
                <img src={logos[0]} />
                <h1>+</h1>
            </LogoAssinatura>
            <TituloAssinatura><p>Driven Plus</p></TituloAssinatura>


            <TituloBeneficios>
                <img src={icones[0]} />
                <p>Benefícios:</p>
            </TituloBeneficios>

            <ConteudoBeneficios>
                <p>1. Brindes exclusivos</p>
                <p>2. Materiais bônus de web</p>

            </ConteudoBeneficios>

            <TituloPreco>
                <img src={icones[1]} />
                <p>Preço:</p>
            </TituloPreco>
            <ConteudoPreco>
                <p>R$ 39,99 cobrados mensalmente</p>
            </ConteudoPreco>

            <FormsAssinatura>
                <input placeholder="Nome" required />
                <input placeholder="Dígitos do cartão" required />

                <InputMenor>
                    <input placeholder="Código de segurança" required />
                    <input placeholder="validade" required />
                </InputMenor>


                <button type="submit"><p>ASSINAR</p></button>
            </FormsAssinatura>

        </>
    )
}

const LogoAssinatura = styled.div`
margin-top: 35px;
display: flex;
justify-content: center;
img{
    width: 92px;
    height: 95px;
}
h1{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 100px;
    color:#FF4791;
    margin-top: 20px;
    margin-left: 5px;
}
`

const TituloAssinatura = styled.div`
display: flex;
justify-content: center;
p{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 32px;
    color: #FFFFFF;
}
`


const TituloBeneficios = styled.div`
display: flex;
margin-left: 44px;
margin-top: 30px;
p{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #FFFFFF;
    margin-left: 5px;
}
`

const ConteudoBeneficios = styled.div`
margin-left: 44px;
margin-top: 10px;
p{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;

}
`

const TituloPreco = styled.div`
display: flex;
margin-left: 44px;
margin-top: 10px;
p{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #FFFFFF;
    margin-left: 5px;
}
`

const ConteudoPreco = styled.div`
margin-left: 44px;
margin-top: 10px;
margin-bottom: 10px;
p{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;

}
`

const FormsAssinatura = styled.form`
display: flex;
flex-direction: column;
align-items: center;
input{
    width: 299px;
    height: 52px;
    border-radius: 8px;
    margin-bottom: 16px;
    padding-left: 10px;
    border: 1px solid black;
    &::placeholder{
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color:#7E7E7E;
    }
}
button{
width: 298px;
height: 52px;
background-color: #FF4791;
border-radius: 8px;
margin-top: 10px;
border: 1px solid black;
}
p{
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: #FFFFFF;
}
`

const InputMenor = styled.div`
display: flex;
justify-content: space-between;
input{
    width: 145px;
    height: 52px;
    border-radius: 8px;
    margin-bottom: 16px;
    margin-left: 5px;
    padding-left: 5px;
    &::placeholder{
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color:#7E7E7E;
    }
}
`

const IconeVoltar = styled.div`
position: fixed;
display:flex;
margin-left: 22px;
margin-top: 10px;
`