import React from 'react';

function Filtros (props) {

    return (
      <div>
        <h4>Filtrar produtos</h4>
        
         <p>Valor mínimo: </p>
         <input type="number" />

         <p>Valor máximo: </p>
         <input type="number"/>

         <p>Buscar por nome </p>
         <input type="number" />

        

    </div>
    );
  }
  
  export default Filtros;