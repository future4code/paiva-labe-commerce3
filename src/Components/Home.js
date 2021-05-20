import React from "react";
import styled from "styled-components";

const CampoPesquisa = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  p,
  div {
    background-color: lightgreen;
    border-radius: 4px;
    border: 1px solid green;
    padding: 8px;
  }
`;

const SectionHome = styled.div`
  display: flex;
`;

const Cards = styled.div`
  background-color: white;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px outset darkgrey;
  box-shadow: 2px 4px black;

  img {
    width: 240px;
    height: 300px;
  }

  button {
    display: flex;
    align-self: center;
    margin-bottom: 16px;
    border-radius: 8px;
  }
`;

class Home extends React.Component {
  state = {
    filtro: [],
    ordem: ""
  };

  ordemProdutos = (event) => {
    this.setState({ ordem: event.target.value });
  };

  render() {
    const listaFiltrada = this.props.listaDeProdutos.filter((produtos) => {
      if (
        produtos.value >= this.props.valMin &&
        produtos.value <= this.props.valMax &&
        produtos.name !== this.props.buscaNome
      ) {
        return true;
      } else {
        return false;
      }
    });

    const cardContainer = listaFiltrada.map((informacao) => {
      return (
        <Cards>
          <img src={informacao.imageUrl} alt={"não aparece"} />
          <p>{informacao.name}</p>
          <p>R${informacao.value}</p>
          <button
            onClick={() => this.props.onClickadicionaCarrinho(informacao.id)}
          >
            Adicionar ao carrinho
          </button>
        </Cards>
      );
    });

    return (
      <div>
        <CampoPesquisa>
          <p>Quantidade de produtos:{listaFiltrada.length}</p>
          <div>
            <span>Ordenações:</span>
            <select value={this.state.ordem} onChange={this.ordemProdutos}>
              <option value={"crescente"}>crescente</option>
              <option value={"decrescente"}>decrescente</option>
            </select>
          </div>
        </CampoPesquisa>
        <SectionHome>{cardContainer}</SectionHome>
      </div>
    );
  }
}

export default Home;