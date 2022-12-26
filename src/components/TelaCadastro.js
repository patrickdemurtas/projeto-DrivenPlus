import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function TelaCadastro() {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Navigate = useNavigate()
    
    function fazerCadastro(e){
        e.preventDefault()

        const corpo = {name, cpf, email, password}

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', corpo)
           promise.then((res) => {
            alert('Cadastro feito com sucesso!')
            Navigate('/')
           })
           promise.catch((erro) => alert(erro.response.data.message))
    }


    return (
        <>
            <ConteudoCadastro>

                <FormsCadastro onSubmit={fazerCadastro}>
                    <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
                    <input placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} required />
                    <input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />
                    <button type="submit"><p>CADASTRAR</p></button>
                </FormsCadastro>


                <Link to="/">
                    <LinkEntrar><p>Já possui uma conta? Entre</p></LinkEntrar>
                </Link>

            </ConteudoCadastro>

        </>
    )
}

const ConteudoCadastro = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 147px;
`

const FormsCadastro = styled.form`
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
&:hover{
    cursor: pointer;
}
}
p{
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: #FFFFFF;
}
`

const LinkEntrar = styled.div`
margin-top: 15px;
p{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #FFFFFF;
}
`