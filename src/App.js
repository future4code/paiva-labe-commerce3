import React from "react";
import Carrinhos from "./Components/Carrinhos";
import Home from "./Components/Home";
import Filtros from "./Components/Filtros";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import cidadeEspacial from "./img/cidade-espacial.jpg";
import lua from "./img/lua.jpg";
import marte from "./img/marte.jpeg";
import saturno from "./img/saturno.jpg";
import universo from "./img/universo.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    background-image: url(${universo});
    background-size: cover;
  }
`;

const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  border-bottom: 2px outset black;
  background-color: darkblue;
`;

const MainContainer = styled.div`
  display: flex;

  div {
    margin: 16px;
  }
`;

class App extends React.Component {
  state = {
    listaDeProdutos: [
      {
        id: 1,
        name: "Citadel",
        value: 50000,
        imageUrl: cidadeEspacial,
        quantidade: 0
      },
      {
        id: 2,
        name: "Lua",
        value: 100000,
        imageUrl: lua,
        quantidade: 0
      },
      {
        id: 3,
        name: "Marte",
        value: 150000,
        imageUrl: marte,
        quantidade: 0
      },
      {
        id: 4,
        name: "Saturno",
        value: 300000,
        imageUrl: saturno,
        quantidade: 0
      }
    ],
    valorMinimo: Number.NEGATIVE_INFINITY,
    valorMaximo: Infinity,
    buscarPorNome: "",
    somaValor: 0,
    caixaCarrinho: []
  };

  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value });
  };

  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value });
  };

  onChangeBuscarPorNome = (event) => {
    this.setState({ buscarPorNome: event.target.value });
  };

  onClickadicionaCarrinho = (id) => {
    const copiaListaDeProdutos = [...this.state.listaDeProdutos];

    const blocoCarrinho = copiaListaDeProdutos.filter((informacao) => {
      if (informacao.id === id) {
        this.setState({ somaValor: this.state.somaValor + informacao.value });
        return true;
      } else {
        return false;
      }
    });

    let copiaCaixaCarrinho = [...this.state.caixaCarrinho];

    let testeEstaNoCarrinho = false;

    copiaCaixaCarrinho.map((item) => {
      if (id === item.id) {
        testeEstaNoCarrinho = true;
        item.quantidade = item.quantidade + 1;
      }
      return false;
    });

    if (!testeEstaNoCarrinho) {
      blocoCarrinho[0].quantidade = 1;
      copiaCaixaCarrinho.push(blocoCarrinho[0]);
    }

    this.setState({ caixaCarrinho: copiaCaixaCarrinho });
  };

  onClickRemoveCarrinho = (id) => {
    const copiaListaDeProdutos = [...this.state.listaDeProdutos];
    console.log(copiaListaDeProdutos);

    const blocoCarrinho = copiaListaDeProdutos.filter((informacao) => {
      if (informacao.id === id) {
        this.setState({ somaValor: this.state.somaValor - informacao.value });
        return true;
      } else {
        return false;
      }
    });
    console.log(blocoCarrinho);

    let copiaCaixaCarrinho = [...this.state.caixaCarrinho];

    console.log(copiaCaixaCarrinho);

    let testeEstaNoCarrinho = false;

    copiaCaixaCarrinho.map((item) => {
      if (id === item.id) {
        testeEstaNoCarrinho = true;
        item.quantidade = item.quantidade - 1;
      }
      return false;
    });

    console.log(testeEstaNoCarrinho);

    if (!testeEstaNoCarrinho) {
      console.log("entrei aqui!");
      blocoCarrinho[0].quantidade = 0;
      copiaCaixaCarrinho.reduce(id, 1);
    }

    this.setState({ caixaCarrinho: copiaCaixaCarrinho });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Titulo>
          <h1>LabStellar</h1>
          <h2>Seja-bem vindo à maior loja de viagens espaciais da Terra!</h2>
          <hr />
        </Titulo>
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
            buscaNome={this.state.buscarPorNome}
            onClickadicionaCarrinho={this.onClickadicionaCarrinho}
          />
          <Carrinhos
            listaDeProdutos={this.state.listaDeProdutos}
            caixaCarrinho={this.state.caixaCarrinho}
            somaDeValores={this.state.somaValor}
            onClickRemoveCarrinho={this.onClickRemoveCarrinho}
          />
        </MainContainer>
      </div>
    );
  }
}

export default App;
