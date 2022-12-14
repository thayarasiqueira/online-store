import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // eslint-disable-next-line camelcase
    const { title, price, image, id, cartSize, estoque } = this.props;
    const quantity = 1;
    // usa o || '[]' para caso não tenha nada, criar array vazio
    const acessarLocalStorage = JSON.parse(localStorage.getItem('id') || '[]');
    // usa os ... para manter o que já tinha e adicionar o novo id clicado
    localStorage.setItem(
      'id',
      JSON.stringify([...acessarLocalStorage,
        { title, price, image, id, quantity, estoque }]),
    );
    cartSize();
  }

  render() {
    const { title, price, image, id, freeShipping } = this.props;
    return (
      <section data-testid="product" className="container-card">
        <Link
          data-testid="product-detail-link"
          to={ `/product/${id}` }
          key={ id }
        >

          <h3>{title}</h3>
          <img src={ image } alt={ title } />
          { freeShipping && <p data-testid="free-shipping">Frete grátis</p> }
          <h4>{ price }</h4>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
          className="btn-cart"
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

Card.propTypes = {
  estoque: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  cartSize: PropTypes.func.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export default Card;
