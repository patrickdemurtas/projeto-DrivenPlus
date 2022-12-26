import d from "../assets/d.png"
import r from "../assets/r.png"
import i from "../assets/i.png"
import v from "../assets/v.png"
import e from "../assets/e.png"
import n from "../assets/n.png"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import AuthContext from "../contexts/AuthContext"
import UserContext from "../contexts/UserContext"




export default function TelaLogin({nomeUsuario, setNomeUsuario}) {

    const driven = [d, r, i, v, e, n]
    const Navigate = useNavigate()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { token, setToken } = useContext(AuthContext)
    const { user, setUser } = useContext(UserContext) 

    function fazerLogin (e) {
     e.preventDefault()

     const corpo = {email, password}

     const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', corpo)
     promise.then((res) => {
        setToken(res.data.token)
        setNomeUsuario(res.data.name)
        setUser({id: res.data.id, name: res.data.name, cpf: res.data.cpf, email: res.data.email, password: res.data.password, membership: res.data.membership })
        if (res.data.membership === null){
            Navigate('/subscriptions') 
        } else if (res.data.membership !== null){
            Navigate('/home')
        }
        console.log(user)
     })
        promise.catch((erro) => {
            alert(erro.response.data.message)
            Navigate('/sign-up')
        })
    }


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

                <FormsLogin onSubmit={fazerLogin}>

                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />
                    <button type="submit"><p>ENTRAR</p></button>

                </FormsLogin>

                <Link to="/sign-up">
                    <LinkCadastro><p>Não possui uma conta? Cadastre-se</p></LinkCadastro>
                </Link>


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