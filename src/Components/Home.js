import React from 'react'
import styled from 'styled-components'

const SectionHome = styled.div`
  border: 1px solid blue;
  display: flex;
`
const Cards = styled.div`
  border: 1px solid purple;
  margin: 16px;
`

class Home extends React.Component {
  

  render() {
    const cardContainer = this.props.listaDeProdutos.map((informacao) => {
        return (
          <Cards>
            <img src={informacao.imageUrl} alt={"não aparece"} />
            <p>{informacao.name}</p>
            <p>R${informacao.value}</p>
            <button>Adicionar ao carrinho</button>
          </Cards>
        )
    });

    return (
      <div>
        <div>
          <span>Quantidade de produtos:</span>
          <span>Ordenações:</span>
          <select>
            <option>crescente</option>
            <option>decrescente</option>
          </select>
        </div>
        <SectionHome>
          {/* {cardContainer} */}
        </SectionHome>
      </div>
    );
  }
}

export default Home;