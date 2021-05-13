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
        name: "produto 1",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        name: "produto 2",
        value: 15000.0,
        imageUrl: "https://picsum.photos/200/201",
      }
    ],
    valorMinimo: -Infinity,
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

  // filtroProdutos = () => {
  //   const produtosFiltrados = []
  //   // if (this.state.valorMinimo) {
  //   produtosFiltrados = this.state.listaDeProdutos.filter(informacao => {
  //     return informacao.value >= this.state.valorMinimo;
  //   })
  //   console.log(produtosFiltrados)
  //   // })}
  //   // else if (this.state.valorMaximo) {
  //   //     produtosFiltrados = produtosFiltrados.filter(informacao => {
  //   //     return informacao.value <= this.state.valorMaximo;})}
  //   // else if (this.state.buscarPorNome !== "") {
  //   //     return informacao; 
  //   // }
  // }

  render() {
    return (
      <MainContainer>

        {/* <button onClick={this.filtroProdutos}>teste</button> */}
        <Filtros
          valMin={this.state.valorMinimo}
          valMax={this.state.valorMaximo}
          search={this.state.buscarPorNome}
          onChangeValorMinimo={this.onChangeValorMinimo}
          onChangeValorMaximo={this.onChangeValorMaximo}
          onChangeBuscarPorNome={this.onChangeBuscarPorNome}
        />
        <Home
          listaDeProdutos={this.state.listaDeProdutos}
          valMin={this.state.valorMinimo}
        />
        <Carrinhos
          listaDeProdutos={this.state.listaDeProdutos}
        />
      </MainContainer>
    );
  }
}

export default App;