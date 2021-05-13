import React from 'react';
import styled from 'styled-components';

const DentrodoCarrinho = styled.div`
width: 20vw;
height: 30vw;
display: flex;
flex-direction: column;
//flex:1;
padding: 8px;
border: 1px solid orange; 
/* justify-content: flex-end; */
//justify-items: center;
`

const ItemProduto = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

`

export default class Carrinhos extends React.Component {

  // state = {
  //   produtos: [],
  //   remover: ""
  // }

  onClickRemover = (idDeletar) => {
    if (window.confirm()) {
      const removerProduto = [...this.state.produtos]
      const produtoRemovido = removerProduto.filter((produtos) => {

        return produtos.index !== idDeletar;
      })

      this.setState({ produtos: produtoRemovido })
    } else {

      return
    }

  }



  carrinhoVazio = () => {
    const vazio = {
      produtos: this.state.produtos,
      semProdutos: this.state.produtos,
      index: Math.random()
    }
    if (vazio.produtos === "") {
      alert("Carrinho esta vazio")
      return
    }



  }



  compraRealizada = () => {

    /* colocar funçao de obrigada pela compra, volte sempre*/


  }


  render() {
    const adicionaProduto = this.props.listaDeProdutos.map((informacao) => {
      return (
        <ItemProduto>
          <p>1x</p>
          <p>{informacao.name}</p>
          <button>Remover</button>
        </ItemProduto>
      )
    });

    return (
      <DentrodoCarrinho>
        <h4>Carrinho:</h4>
        <div>{adicionaProduto}</div>
        <p>Valor total:</p>
      </DentrodoCarrinho>
    );




  }



}

