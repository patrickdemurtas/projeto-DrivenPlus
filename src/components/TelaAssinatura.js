import styled from "styled-components"
import logopluscadastro from "../assets/logopluscadastro.png";
import logogoldcadastro from "../assets/logogoldcadastro.png";
import logopremiumcadastro from "../assets/logopremiumcadastro.png";
import beneficios from "../assets/beneficios.png";
import preco from "../assets/preco.png";
import iconevoltar from "../assets/iconevoltar.png"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import PlanoContext from "../contexts/PlanoContext";
import UserContext from "../contexts/UserContext";

export default function TelaAssinatura({ nomeCartao, setNomeCartao }) {

    const logos = [logopluscadastro, logogoldcadastro, logopremiumcadastro];
    const icones = [beneficios, preco, iconevoltar];

    const [planoDesc, setPlanoDesc] = useState([])

    const [numeroCartao, setNumeroCartao] = useState('')
    const [codCartao, setCodCartao] = useState()
    const [valCartao, setValCartao] = useState('')

    const { infoPlano, setInfoPlano } = useContext(PlanoContext)
    const { user, setUser } = useContext(UserContext)

    const Navigate = useNavigate()
    const { idPlano } = useParams();
    const { token } = useContext(AuthContext)

    console.log(idPlano)

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}`, config)
        promise.then((res) => {
            setPlanoDesc(res.data)
        })
        promise.catch((erro) => alert(erro.response.data.message))
    }, [])

    if (planoDesc.length === 0) {
        return (
            <div>Carregando...</div>
        )
    }

    function assinarPlano(e) {
        e.preventDefault()
        let resultado = window.confirm(`Tem certeza que deseja assinar o plano ${planoDesc.name} (${planoDesc.price})?`)
        if (resultado === true) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const corpo = { membershipId: idPlano, cardName: nomeCartao, cardNumber: numeroCartao, securityNumber: codCartao, expirationDate: valCartao }

            const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', corpo, config)
            promise.then((res) => {
                setUser(res.data)
                alert('Assinatura feita com sucesso')
                Navigate('/home')
            })
            promise.catch((erro) => alert(erro.response.data.message))
        }
    }
    return (
        <>
            <Link to="/subscriptions">
                <IconeVoltar><img src={icones[2]} /></IconeVoltar>
            </Link>

            <LogoAssinatura>
                <img src={planoDesc.image} />

            </LogoAssinatura>
            <TituloAssinatura><p>{planoDesc.name}</p></TituloAssinatura>


            <TituloBeneficios>
                <img src={icones[0]} />
                <p>Benefícios:</p>
            </TituloBeneficios>

            {planoDesc.perks.map((pp) => (
                <ConteudoBeneficios>
                    <p>- {pp.title}</p>
                </ConteudoBeneficios>
            ))}


            <TituloPreco>
                <img src={icones[1]} />
                <p>Preço:</p>
            </TituloPreco>
            <ConteudoPreco>
                <p>R$ {planoDesc.price} cobrados mensalmente</p>
            </ConteudoPreco>

            <FormsAssinatura onSubmit={assinarPlano}>
                <input placeholder="Nome impresso no cartão" value={nomeCartao} onChange={e => setNomeCartao(e.target.value)} required />
                <input placeholder="Dígitos do cartão" value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)} required />

                <InputMenor>
                    <input type="number" placeholder="Código de segurança" value={codCartao} onChange={e => setCodCartao(e.target.value)} required />
                    <input placeholder="validade" value={valCartao} onChange={e => setValCartao(e.target.value)} required />
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
