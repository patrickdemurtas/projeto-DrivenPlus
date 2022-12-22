import styled from "styled-components"

export default function TelaCadastro() {
    return (
        <>
            <ConteudoCadastro>

                <FormsCadastro>
                    <input placeholder="Nome" required />
                    <input placeholder="CPF" required />
                    <input placeholder="E-mail" required />
                    <input placeholder="Senha" required />
                    <button type="submit"><p>CADASTRAR</p></button>
                </FormsCadastro>

                <LinkEntrar><p>Já possui uma conta? Entre</p></LinkEntrar>

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