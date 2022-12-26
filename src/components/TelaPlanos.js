import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TelaPlanos() {

   

    const [planosPrev, setPlanosPrev] = useState([])

    const { token } = useContext(AuthContext)


    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config)
        promise.then((res) => {
            setPlanosPrev(res.data)
        })
        promise.catch((erro) => console.log(erro.response.data))
    }, [])

  

    return (
        <>
            <TituloPlanos><p>Escolha seu Plano</p></TituloPlanos>

            <ConteudoPlanos>

            {planosPrev.map((p) => (
                <Link to={`/subscriptions/${p.id}`} style={{textDecoration: 'none'}}>
                <ButtonCadastro>
                    <img src={p.image} />
                    <h2>R$ {p.price}</h2>
                </ButtonCadastro>
                </Link>
            ))}

                
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
&:hover{
cursor: pointer;
}
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
