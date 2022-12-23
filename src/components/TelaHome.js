import styled from "styled-components";
import logohomeplus from "../assets/logohomeplus.png";
import logohomegold from "../assets/logohomegold.png";
import logohomepremium from "../assets/logohomepremium.png";
import iconeperson from "../assets/iconeperson.png"


export default function TelaHome() {

    const icones = [logohomeplus, logohomegold, logohomepremium, iconeperson];

    return (
        <>
            <HeaderHome>

                <LogoHome>
                    <img src={icones[2]} />
                    <p>+</p>
                </LogoHome>
                <img src={icones[3]} />

            </HeaderHome>

            <TituloHome><p>Olá, Fulano</p></TituloHome>

            <ButtonBeneficiosContainer>
                <ButtonBeneficios><p>Solicitar brindes</p></ButtonBeneficios>
                <ButtonBeneficios><p>Materiais bônus da web</p></ButtonBeneficios>
                <ButtonBeneficios><p>Aulas bônus de tech</p></ButtonBeneficios>
                <ButtonBeneficios><p>Mentorias personalizadas</p></ButtonBeneficios>
            </ButtonBeneficiosContainer>

            <ButtonPlanosContainer>
              <ButtonMudar><p>Mudar plano</p></ButtonMudar>
              <ButtonCancelar><p>Cancelar plano</p></ButtonCancelar>
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