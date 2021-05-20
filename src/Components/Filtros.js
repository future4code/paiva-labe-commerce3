import React from "react";
import styled from "styled-components";

const SectionFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px outset darkgrey;
  box-shadow: 2px 4px black;
`;

class Filtros extends React.Component {
  render() {
    return (
      <SectionFilter>
        <h4>Filtrar produtos</h4>

        <p>Valor mínimo: </p>
        <input
          type="number"
          value={this.props.valMin}
          onChange={this.props.onChangeValorMinimo}
        />

        <p>Valor máximo: </p>
        <input
          type="number"
          value={this.props.valMax}
          onChange={this.props.onChangeValorMaximo}
        />

        <p>Buscar por nome </p>
        <input
          value={this.props.search}
          onChange={this.props.onChangeBuscarPorNome}
        />
      </SectionFilter>
    );
  }
}

export default Filtros;
