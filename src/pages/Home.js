import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      productList: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

handleSearch = async () => {
    const { search } = this.state;
    const listProducts = await getProductsFromCategoryAndQuery(search);
    const { results } = listProducts
    this.setState({ productList: results });
  }

  render() {
    const { productList } = this.state;
    return (
      <div>
        <label htmlFor="input-pesquisa">
          <input
            data-testid="query-input"
            id="input-pesquisa"
            type="text"
            name="search"
            onChange={ this.handleInputChange }
          />
        </label>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ul />
        <button data-testid="query-button" type="button" onClick={ this.handleSearch }>Buscar</button>
        { productList.map((products) =>(
          <Card
          title={products.title}
          price={products.price}
          image={products.thumbnail}
          />
        ))}
      </div>);
  }
}

export default Home;
