import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Link to="/shoppingcart" data-testid="shopping-cart-button">
        Carrinho de compras
      </Link>
    );
  }
}

export default Header;
