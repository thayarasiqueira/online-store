import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      LocalStorage: [],
      retornoApi: [],
      Quantity: [],
    };
  }

  async componentDidMount() {
    const acessarLocalStorage = JSON.parse(localStorage.getItem('id') || '[]');
    this.setState({ LocalStorage: [...acessarLocalStorage] }, () => {
      const { LocalStorage } = this.state;
      LocalStorage.map((product) => this.showProducts(product));
      LocalStorage.map((product) => this.setState({ [product.id]: 1 }));
    });
  }

  showProducts = (product) => {
    this.setState((prevState) => ({
      retornoApi: [...prevState.retornoApi, product],
    }));
  }

  decreaseQuantity = ({ target }) => {
    const { parentNode: { id } } = target;
    console.log(id);

    this.setState((prevState) => ({
      [id]: prevState[id] - 1,
    }));
  }

  increaseQuantity = ({ target }) => {
    const { parentNode: { id } } = target;
    console.log(id);

    this.setState((prevState) => ({
      [id]: prevState[id] + 1,
    }));
  }

  render() {
    const { retornoApi } = this.state;
    return (
      <div>
        { retornoApi.length > 0 && retornoApi.map((produto) => (
          <div key={ produto.id }>
            <p data-testid="shopping-cart-product-name">{ produto.title }</p>
            <div id={ produto.id }>
              <button
                type="button"
                onClick={ this.decreaseQuantity }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">
                { this.state[produto.id] }
              </p>
              <button
                type="button"
                onClick={ this.decreaseQuantity }
                data-testid="product-increase-quantity"
              >
                +
              </button>
            </div>
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
