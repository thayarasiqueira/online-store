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
      LocalStorage.map((product) => this.showProducts(product));
    });
  }

  showProducts = (product) => {
    this.setState((prevState) => ({
      retornoApi: [...prevState.retornoApi, product],
    }));
  }

  decreaseQuantity = ({ target }) => {
    const { parentNode: { id } } = target;
    let { retornoApi } = this.state;

    const product = retornoApi.find((item) => item.id === id);
    product.quantity -= product.quantity > 1 && 1;
    const newList = retornoApi.filter((elem) => elem.id !== product.id);
    retornoApi = [...newList, product];

    this.setState({
      retornoApi,
    });
  }

  increaseQuantity = ({ target }) => {
    const { parentNode: { id } } = target;
    let { retornoApi } = this.state;

    const product = retornoApi.find((item) => item.id === id);
    product.quantity += 1;
    const newList = retornoApi.filter((elem) => elem.id !== product.id);
    retornoApi = [...newList, product];

    this.setState({
      retornoApi,
    });
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
                { produto.quantity }
              </p>
              <button
                type="button"
                onClick={ this.increaseQuantity }
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
