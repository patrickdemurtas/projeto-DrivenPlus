import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaPlanos from "./TelaPlanos";
import TelaAssinatura from "./TelaAssinatura";
import TelaHome from "./TelaHome";




function App() {
  return (
    <Container>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="/sign-up" element={<TelaCadastro />} />
          <Route path="/subscriptions" element={<TelaPlanos />} />
          <Route path="/subscriptions/:idPlano" element={<TelaAssinatura />} />
          <Route path="/home" element={<TelaHome />} />
        </Routes>

      </BrowserRouter>

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
