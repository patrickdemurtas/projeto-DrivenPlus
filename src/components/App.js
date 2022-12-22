import styled from "styled-components";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaPlanos from "./TelaPlanos";
import TelaAssinatura from "./TelaAssinatura";



function App() {
  return (
    <Container>

    <TelaAssinatura />

    </Container>
    
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
