import React from "react";
import styled from "styled-components";

const DentrodoCarrinho = styled.div`
  width: 15vw;
  height: 30vw;
  padding: 8px;
  border: 1px outset darkgrey;
  box-shadow: 2px 4px black;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ItemProduto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  background-color: lightseagreen;
  border: 1px solid green;
  border-radius: 4px;
  padding: 4px;

  button {
    height: 32px;
    border-radius: 16px;
    margin-left: 8px;
  }
`;

export default class Carrinhos extends React.Component {
  render() {
    const adicionaProduto = this.props.caixaCarrinho.map((informacao) => {
      return (
        <ItemProduto>
          <p>{informacao.quantidade}</p>
          <p>{informacao.name}</p>
          <button
            onClick={() => this.props.onClickRemoveCarrinho(informacao.id)}
          >
            Remover
          </button>
        </ItemProduto>
      );
    });

    return (
      <DentrodoCarrinho>
        <h4>Carrinho:</h4>
        <div>{adicionaProduto}</div>
        <p>Valor total: R${this.props.somaDeValores}</p>
      </DentrodoCarrinho>
    );
  }
}
