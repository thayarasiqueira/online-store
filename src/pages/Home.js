import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';
import '../Card.css';

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
        <div className="container-input">
          <label htmlFor="input-pesquisa">
            <input
              data-testid="query-input"
              id="input-pesquisa"
              type="text"
              name="search"
              onChange={ this.handleInputChange }
            />
          </label>

          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleSearch }
          >
            Buscar
          </button>
        </div>
        <Link data-testid="shopping-cart-button" to="/shoppingCart"> </Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div className="container-all-cards">
          { productList.map((products) => (
            <Card
              key={ products.id }
              title={ products.title }
              price={ products.price }
              image={ products.thumbnail }
            />
          ))}
        </div>
      </div>);
  }
}

export default Home;
