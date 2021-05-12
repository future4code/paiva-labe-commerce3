import React from "react";
import Carrinhos from "./Components/Carrinhos";
import Home from "./Components/Home";
import Filtros from "./Components/Filtros";
import styled from "styled-components";
const MainContainer = styled.div`
  display: flex;
`;

function App() {
  return (
    <MainContainer>
      <Filtros />
      <Home />
      <Carrinhos />
    </MainContainer>
  );
}

export default App;
