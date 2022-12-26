import styled from "styled-components";
import logohomeplus from "../assets/logohomeplus.png";
import logohomegold from "../assets/logohomegold.png";
import logohomepremium from "../assets/logohomepremium.png";
import iconeperson from "../assets/iconeperson.png"
import { useContext } from "react";
import PlanoContext from "../contexts/PlanoContext";
import UserContext from "../contexts/UserContext";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";


export default function TelaHome({ nomeCartao, setNomeCartao, nomeUsuario, setNomeUsuario }) {

    const icones = [logohomeplus, logohomegold, logohomepremium, iconeperson];

    const { infoPlano, setInfoPlano } = useContext(PlanoContext)
    const { user, setUser } = useContext(UserContext)
    const { token, setToken } = useContext(AuthContext)
    const Navigate = useNavigate()

    function teste() {

        console.log(user)
    }

    if (user.length === 0) {
        return (
            <div>Carregando...</div>
        )
    }



    function cancelarPlano() {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', config)
        promise.then((res) => Navigate('/subscriptions'))

    }

    function alterarPlano() {
        Navigate('/subscriptions')
    }

    return (
        <>
            <HeaderHome>

                <LogoHome>
                    <img src={user.membership.image} />

                </LogoHome>
                <img src={icones[3]} />

            </HeaderHome>

            <TituloHome><p>Olá, {nomeUsuario}</p></TituloHome>

            <ButtonBeneficiosContainer>
                {user.membership.perks.map((ump) => (
                    <a href={ump.link}>
                        <ButtonBeneficios>

                            <p>{ump.title}</p>

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
p{
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: #FFFFFF;
}
`