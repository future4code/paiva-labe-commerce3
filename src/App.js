import React from "react";
import Carrinhos from "./Components/Carrinhos";
import Home from "./Components/Home";
import Filtros from "./Components/Filtros";
import styled from "styled-components";
import { render } from "@testing-library/react";
import cidadeEspacial from './img/cidade-espacial.jpg';
import lua from './img/lua.jpg';
import marte from './img/marte.jpeg';
import saturno from './img/saturno.jpg';

const MainContainer = styled.div`
  display: flex;
`

class App extends React.Component {
  state = {
    listaDeProdutos: [
      {
        id: 1,
        name: "Viagem a Citadel!",
        value: 50000,
        imageUrl: cidadeEspacial,
      },
      {
        id: 2,
        name: "Viagem a Lua!",
        value: 100000,
        imageUrl: lua,
      },
      {
        id: 3,
        name: "Viagem a Marte",
        value: 150000,
        imageUrl: marte,
      },
      {
        id: 4,
        name: "Viagem a Saturno",
        value: 300000,
        imageUrl: saturno,
      }
    ],
    valorMinimo: Number.NEGATIVE_INFINITY,
    valorMaximo: Infinity,
    buscarPorNome: "",
  }

  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value })
  }

  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }

  onChangeBuscarPorNome = (event) => {
    this.setState({ buscarPorNome: event.target.value })
  }

  render() {
    return (
      <MainContainer>
        <Filtros
          valMin={this.state.valorMinimo}
          valMax={this.state.valorMaximo}
          search={this.state.buscarPorNome}
          onChangeValorMinimo={this.onChangeValorMinimo}
          onChangeValorMaximo={this.onChangeValorMaximo}
          onChangeBuscarPorNome={this.onChangeBuscarPorNome}
          filtrarProdutos={this.filtrarProdutos}
        />
        <Home
          listaDeProdutos={this.state.listaDeProdutos}
          valMin={this.state.valorMinimo}
          valMax={this.state.valorMaximo}
        />
        <Carrinhos
          listaDeProdutos={this.state.listaDeProdutos}
        />
      </MainContainer>
    );
  }
}

export default App;