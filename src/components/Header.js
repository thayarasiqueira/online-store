import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  componentDidMount() {
    const { func } = this.props;
    func();
  }

  render() {
    const { size } = this.props;

    return (
      <Link to="/shoppingcart" data-testid="shopping-cart-button">
        Carrinho de compras
        <span data-testid="shopping-cart-size">{ size }</span>
      </Link>
    );
  }
}

Header.propTypes = {
  size: PropTypes.number.isRequired,
  func: PropTypes.func.isRequired,
};

export default Header;
