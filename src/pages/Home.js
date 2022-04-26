import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      productList: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSearch = async () => {
    const { search } = this.state;
    const listProducts = await getProductsFromCategoryAndQuery(search);
    const { results } = listProducts;
    this.setState({ productList: results });
  }

  render() {
    const { productList } = this.state;
    return (
      <div className="search">
        <label htmlFor="input-pesquisa">
          <input
            data-testid="query-input"
            id="input-pesquisa"
            type="text"
            name="search"
            onChange={ this.handleInputChange }
          />
        </label>

        <Link data-testid="shopping-cart-button" to="/shoppingCart"> </Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ul />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleSearch }
        >
          Buscar
        </button>
        { productList.map((products) => (
          <Card
            key={ products.id }
            title={ products.title }
            price={ products.price }
            image={ products.thumbnail }
          />
        ))}
      </div>);
  }
}

export default Home;
