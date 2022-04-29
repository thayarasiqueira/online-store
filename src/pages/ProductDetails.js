import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: '',
    };
  }

  handleClick = () => {
    const { match: { params: { id } } } = this.props;
    const acessarLocalStorage = JSON.parse(localStorage.getItem('id') || '[]');
    localStorage.setItem('id', JSON.stringify([...acessarLocalStorage, id]));
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    try {
      const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
      const data = await response.json();
      this.setState({ product: data });
    } catch (error) {
      return error;
    }
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price, attributes } = product;

    return (
      <div>
        <p data-testid="product-detail-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <ul>
          { attributes && attributes.map((e) => (
            <li key={ e.id }>
              { e.name }
              :
              { e.value_name }
            </li>
          ))}
        </ul>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
