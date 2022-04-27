import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import '../Card.css';

class Home extends Component {
  render() {
    const { productList, handleInputChange, handleSearch } = this.props;
    return (
      <div className="search">
        <div className="container-input">
          <label htmlFor="input-pesquisa">
            <input
              data-testid="query-input"
              id="input-pesquisa"
              type="text"
              name="search"
              onChange={ handleInputChange }
            />
          </label>
          <button
            data-testid="query-button"
            type="button"
            onClick={ handleSearch }
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
          { productList.length !== 0
            && productList.map((products) => (
              <Link
                data-testid="product-detail-link"
                to={ `/product/${products.id}` }
                key={ products.id }
              >
                <Card
                  key={ products.id }
                  title={ products.title }
                  price={ products.price }
                  image={ products.thumbnail }
                />
              </Link>
            ))}
        </div>
      </div>);
  }
}
Home.propTypes = {
  productList: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
export default Home;
