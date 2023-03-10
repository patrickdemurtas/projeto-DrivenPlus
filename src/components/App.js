import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaPlanos from "./TelaPlanos";
import TelaAssinatura from "./TelaAssinatura";
import TelaHome from "./TelaHome";
import { useState } from "react";
import AuthContext from "../contexts/AuthContext";
import UserContext from "../contexts/UserContext";





function App() {

  const [token, setToken] = useState('')
  const [user, setUser] = useState({})
  const [nomeCartao, setNomeCartao] = useState('')
  const [nomeUsuario, setNomeUsuario] = useState('')

  const Auth = localStorage.getItem("token")

  function storageToken(token){
    if(token !== null){
      setToken(token)
      localStorage.setItem("token",token)

    }
  }

  function storageUser(user){
    if (user !== null){
      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
    }
  }

  function storageNomeUsuario(nomeUsuario){
    if (nomeUsuario !== null){
      setNomeUsuario(nomeUsuario)
      localStorage.setItem("nomeUsuario", nomeUsuario)
    }
  }

 
  return (
    <Container>

      <AuthContext.Provider value={{ token, setToken, storageToken, storageUser, Auth }} >
        <UserContext.Provider value={{ user, setUser, nomeUsuario, setNomeUsuario, nomeCartao, setNomeCartao, storageNomeUsuario }}>
         

            <BrowserRouter>

              <Routes>
                <Route path="/" element={<TelaLogin />} />
                <Route path="/sign-up" element={<TelaCadastro />} />
                <Route path="/subscriptions" element={<TelaPlanos />} />
                <Route path="/subscriptions/:idPlano" element={<TelaAssinatura  />} />
                <Route path="/home" element={<TelaHome />} />
              </Routes>

            </BrowserRouter>

          
        </UserContext.Provider>
      </AuthContext.Provider>

    </Container >

  );
}

export default App;

const Container = styled.div`
width: 375px;
height: 667px;
background-color: #0E0E13;
margin: 0 auto;
display: flex;
flex-direction: column;
`
