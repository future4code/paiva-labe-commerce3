import React from 'react';
import styled from 'styled-components';

const DentrodoCarrinho = styled.div`
width: 20vw;
height: 30vw;
display: flex;
//flex:1;
padding: 8px;
border: 1px solid black; 
justify-content: flex-end;
//justify-items: center;
`




export default class carrinhos extends React.Component{

  state = {
    produtos:[],
    remover:""
  }

    onClickRemover = (idDeletar) =>{
    if(window.confirm ()){
        const removerProduto = [...this.state.produtos]
        const produtoRemovido = removerProduto.filter((produtos)=>{

            return produtos.index !== idDeletar ;
        })

        this.setState({produtos: produtoRemovido})
    }   else{
      
        return
        }
        
    }



    carrinhoVazio = () =>{
      const vazio = {
        produtos: this.state.produtos,
        semProdutos: this.state.produtos,
        index: Math.random()
      }
      if(vazio.produtos === "" ){
        alert("Carrinho esta vazio")
        return
      }

      

    }


   
    compraRealizada = () =>{

      /* colocar funçao de obrigada pela compra, volte sempre*/


    }


  render() {

    return (
      <DentrodoCarrinho>

      <div>
        
          <h3>Carrinho:</h3>

        <div>
        <p>1x Viagem Cidade Espacial I 
           <button>Remover</button>
        </p>
       
        <p>1x Viagem à Lua 
          <button>Remover</button>
        </p>
        
        <p>1x Viagem à Marte 
        <button>Remover</button>
        </p>
        </div>
        
         
        <p>Valor total R$ 100,00</p>
  
        <button>Finalizar compra</button>

  
      </div>
       </DentrodoCarrinho>
    );
        



  }
    


}
 
