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
import PlanoContext from "../contexts/PlanoContext";




function App() {

  const [token, setToken] = useState("")
  const [user, setUser] = useState({})
  const [infoPlano, setInfoPlano] = useState({})
  const [nomeCartao, setNomeCartao] = useState('')

  return (
    <Container>

      <AuthContext.Provider value={{ token, setToken }} >
        <UserContext.Provider value={{ user, setUser }}>
          <PlanoContext.Provider value={{ infoPlano, setInfoPlano }}>

            <BrowserRouter>

              <Routes>
                <Route path="/" element={<TelaLogin />} />
                <Route path="/sign-up" element={<TelaCadastro />} />
                <Route path="/subscriptions" element={<TelaPlanos />} />
                <Route path="/subscriptions/:idPlano" element={<TelaAssinatura nomeCartao={nomeCartao} setNomeCartao={setNomeCartao} />} />
                <Route path="/home" element={<TelaHome nomeCartao={nomeCartao} setNomeCartao={setNomeCartao}/>} />
              </Routes>

            </BrowserRouter>

          </PlanoContext.Provider>
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
