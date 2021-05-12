import React from 'react';
//import styled from 'styled-components';


export default class carrinhos extends React.Component{

  render() {

    return (
      <div >
        <h3>Carrinho:</h3>
        <div>
        <p>1x Viagem Cidade Espacial I </p>
        <button>Remover</button>
  
        </div>
        <div>
        <p>1x Viagem à Lua  </p>
        <button>Remover</button>
  
        </div>
        <div>
        <p>1x Viagem à Marte </p>
        <button>Remover</button>
  
        </div>
        
  
  
        <p>Valor total R$ 100,00</p>
  
        <button>Finalizar compra</button>
  
      </div>
    );
        
  }
    

}
 
