import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class shoppingCart extends Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">Retornar</Link>
      </div>
    );
  }
}

export default shoppingCart;
