import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Evaluation from '../components/Evaluation';
import Comments from '../components/Comments';
import '../ProductDetails.css';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: '',
      evaluations: [],
    };
  }

  handleClick = () => {
    const { product } = this.state;
    const { title, price, image, id, available_quantity: estoque } = product;
    const { cartSize } = this.props;
    const quantity = 1;
    const acessarLocalStorage = JSON.parse(localStorage.getItem('id') || '[]');
    localStorage.setItem(
      'id',
      JSON.stringify([
        ...acessarLocalStorage,
        { title, price, image, id, quantity, estoque },
      ]),
    );

    cartSize();
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

    this.showEvaluation(id);
  }

  showEvaluation = (id) => {
    const storage = JSON.parse(localStorage.getItem('evaluation') || '[]');
    if (storage.length) {
      const evaluations = storage.filter((e) => e.id === id);
      this.setState({ evaluations });
    }
  }

  render() {
    const { product, evaluations } = this.state;
    const { id, title, thumbnail, price, attributes, shipping } = product;

    return (
      <div className="container-product-details">
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <ul>
          { attributes && attributes.map((e) => (
            <li key={ e.id }>
              <strong>{ `${e.name}: `}</strong>
              {e.value_name}
            </li>
          ))}
        </ul>
        {product && shipping.free_shipping && (
          <p data-testid="free-shipping">Frete grátis</p>
        )}
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
          className="btn"
        >
          Adicionar ao carrinho
        </button>
        { product && <Evaluation id={ id } showEvaluation={ this.showEvaluation } /> }
        <Comments evaluations={ evaluations } />
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
  cartSize: PropTypes.func.isRequired,
};

export default ProductDetails;
