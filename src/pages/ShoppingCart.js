import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      LocalStorage: [],
      retornoApi: [],
    };
  }

  async componentDidMount() {
    const acessarLocalStorage = JSON.parse(localStorage.getItem('id') || '[]');
    this.setState({ LocalStorage: [...acessarLocalStorage] }, () => {
      const { LocalStorage } = this.state;
      LocalStorage.map((id) => this.chamarApi(id));
    });
  }

   chamarApi = async (id) => {
     const { retornoApi } = this.state;

     try {
       const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
       const data = await response.json();
       retornoApi.push(data);
       this.setState({ retornoApi });
     } catch (error) {
       return error;
     }
   }

   render() {
     const { retornoApi } = this.state;
     return (
       <div>
         { retornoApi.length > 0 && retornoApi.map((produto) => (
           <div key={ produto.id }>
             <p data-testid="shopping-cart-product-name">{ produto.title }</p>
             <p data-testid="shopping-cart-product-quantity">1</p>
           </div>
         ))}
         { retornoApi.length === 0
          && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> }
         <Link to="/">Retornar</Link>
       </div>
     );
   }
}

export default ShoppingCart;
