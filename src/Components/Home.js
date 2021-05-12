import React from 'react';
import styled from 'styled-components';
// import cidadeEspacial from './img/cidade-espacial.jpg';
// import lua from './img/lua.jpg';
// import marte from './img/lua.jpg';
// import saturno from './img/saturno.jpg';

const SectionCardContainer = styled.div`
  width: 80vw;
`

const BlocoCards = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 16px;
`
const CardContainer = styled.div`
  width: 280px;
  height: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin-right: 16px;

  button {
    width: 160px;
    display: flex;
    align-self: center;
    justify-content: center;
  }
`

const InformacaoesGerais = styled.div`
  display: flex;
  justify-content: space-between;
`

export default class Home extends React.Component {
  state = {
    listaDeProdutos:[
      {
        id: 1,
        name: "Viagem Cidade Espacial I",
        value: 10000.00,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 2,
        name: "Viagem à Lua",
        value: 15000.00,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 3,
        name: "Viagem à Marte",
        value: 20000.00,
        imageUrl: "https://picsum.photos/200/200"
      },{
        id: 4,
        name: "Viagem à Saturno",
        value: 25000.00,
        imageUrl: "https://picsum.photos/200/200"
      }
    ]
  }

  render() {

    return (
      <SectionCardContainer >
        <InformacaoesGerais>
          <div>Quantidade de produtos:</div>
          <div>Ordenação</div>
        </InformacaoesGerais>
        <BlocoCards>
          <CardContainer>
            <img src={this.state.listaDeProdutos[0].imageUrl} alt={"não exibe"} />
            <div>
              <p>{this.state.listaDeProdutos[0].name}</p>
              <p>R${this.state.listaDeProdutos[0].value}</p>
            </div>
            <button>Adicionar ao carrinho</button>
          </CardContainer>
          <CardContainer>
            <img src={this.state.listaDeProdutos[1].imageUrl} alt={"não exibe"} />
            <div>
              <p>{this.state.listaDeProdutos[1].name}</p>
              <p>R${this.state.listaDeProdutos[1].value}</p>
            </div>
            <button>Adicionar ao carrinho</button>
          </CardContainer>
          <CardContainer>
            <img src={this.state.listaDeProdutos[2].imageUrl} alt={"não exibe"} />
            <div>
              <p>{this.state.listaDeProdutos[2].name}</p>
              <p>R${this.state.listaDeProdutos[2].value}</p>
            </div>
            <button>Adicionar ao carrinho</button>
          </CardContainer>
          <CardContainer>
            <img src={this.state.listaDeProdutos[3].imageUrl} alt={"não exibe"} />
            <div>
              <p>{this.state.listaDeProdutos[3].name}</p>
              <p>R${this.state.listaDeProdutos[3].value}</p>
            </div>
            <button>Adicionar ao carrinho</button>
          </CardContainer>
        </BlocoCards>
      </SectionCardContainer>
    );
  }
}