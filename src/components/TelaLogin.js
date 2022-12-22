import d from "../assets/d.png"
import r from "../assets/r.png"
import i from "../assets/i.png"
import v from "../assets/v.png"
import e from "../assets/e.png"
import n from "../assets/n.png"
import styled from "styled-components"
import { Link } from "react-router-dom"





export default function TelaLogin() {

    const driven = [d, r, i, v, e, n]

    return (

        <>

            <Logo>
                <img src={driven[0]} />
                <img src={driven[1]} />
                <img src={driven[2]} />
                <img src={driven[3]} />
                <img src={driven[4]} />
                <img src={driven[5]} />
                <Plus>+</Plus>
            </Logo>

            <ConteudoLogin>

                <FormsLogin>

                    <input placeholder="E-mail" required />
                    <input placeholder="Senha" required />
                    <button type="submit"><p>ENTRAR</p></button>

                </FormsLogin>
                <LinkCadastro><p>Não possui uma conta? Cadastre-se</p></LinkCadastro>



            </ConteudoLogin>

        </>

    )
}


const ConteudoLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 100px;
`

const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
img{
    margin-top: 135px;
}
`

const Plus = styled.div`
font-family: 'Roboto', sans-serif;
font-weight: 700;
color: #FF4791;
font-size: 100px;
margin-left: 11px;
margin-top: 135px;
`


const ButtonEntrar = styled.button`
width: 298px;
height: 52px;
background-color: #FF4791;
border-radius: 8px;
p{
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: #FFFFFF;
}
`
const LinkCadastro = styled.div`
margin-top: 15px;
p{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #FFFFFF;
}
`

const FormsLogin = styled.form`
display: flex;
flex-direction: column;
align-items: center;
input{
    width: 299px;
    height: 52px;
    border-radius: 8px;
    margin-bottom: 16px;
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
}
p{
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: #FFFFFF;
}
`