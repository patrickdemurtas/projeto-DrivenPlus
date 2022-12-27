import styled from "styled-components";
import iconeperson from "../assets/iconeperson.png"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";


export default function TelaHome() {

    const icones = [iconeperson];

    const Auth = localStorage.getItem("token")

    
    const { user, setUser, nomeUsuario, setNomeUsuario, nomeCartao, setNomeCartao } = useContext(UserContext)
    const { token, setToken } = useContext(AuthContext)
    const Navigate = useNavigate()

 

    if (user.length === 0) {
        return (
            <div>Carregando...</div>
        )
    }

     

    function cancelarPlano() {
        const config = {
            headers: {
                Authorization: `Bearer ${Auth}`
            }
        }

        const promise = axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', config)
        promise.then((res) => Navigate('/subscriptions'))

    }

    function alterarPlano() {
        Navigate('/subscriptions')
    }

    const nome = localStorage.getItem("nomeUsuario")
    const dadosHome = JSON.parse(localStorage.getItem("user"))

    return (
        <>
            <HeaderHome>

                <LogoHome>
                    <img src={dadosHome.membership.image} />

                </LogoHome>
                <img src={icones[0]} />

            </HeaderHome>

            <TituloHome><p>Olá, {nome}</p></TituloHome>

            <ButtonBeneficiosContainer>
                {dadosHome.membership.perks.map((dmp) => (
                    <a href={dmp.link}>
                        <ButtonBeneficios>

                            <p>{dmp.title}</p>

                        </ButtonBeneficios>
                    </a>
                ))}
            </ButtonBeneficiosContainer>

            <ButtonPlanosContainer>
                <ButtonMudar onClick={alterarPlano}><p>Mudar plano</p></ButtonMudar>
                <ButtonCancelar onClick={cancelarPlano}><p>Cancelar plano</p></ButtonCancelar>
            </ButtonPlanosContainer>
        </>

    )
}

const HeaderHome = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 32px;
padding-left: 38px;
padding-right: 38px;
img{
    width: 34px;
    height: 33px;
}
`

const LogoHome = styled.div`
display: flex;

p{
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    font-weight: 700;
    color:#FF4791;
    margin-top: 20px;
}
img{
    width: 49px;
    height: 51px;
}
`

const TituloHome = styled.div`
display: flex;
justify-content: center;
p{
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    color: #FFFFFF;
}
`

const ButtonBeneficiosContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-top: 50px;
`

const ButtonBeneficios = styled.button`
width: 298px;
height: 52px;
background-color: #FF4791;
border-radius: 8px;
margin-bottom: 8px;
border: 1px solid black;
&:hover{
    cursor: pointer;
}
p{
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: #FFFFFF;
}
`

const ButtonPlanosContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 120px;
`

const ButtonMudar = styled.button`
width: 298px;
height: 52px;
background-color: #FF4791;
border-radius: 8px;
margin-bottom: 8px;
border: 1px solid black;
&:hover{
    cursor: pointer;
}
p{
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: #FFFFFF;
}
`

const ButtonCancelar = styled.button`
width: 298px;
height: 52px;
background-color: #FF4747;
border-radius: 8px;
margin-bottom: 8px;
border: 1px solid black;
&:hover{
cursor: pointer;
}
p{
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: #FFFFFF;
}
`