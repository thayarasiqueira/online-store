import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import Categories from '../components/Categories';
import '../Card.css';

class Home extends Component {
  render() {
    const { productList, handleInputChange, handleSearch, handleCategorie,
      cartSize } = this.props;
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
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div className="container-all-cards">
          {productList.length !== 0
              && productList.map((products) => {
                const { id, title, price, thumbnail, shipping,
                  available_quantity: estoque } = products;
                return (
                  <Card
                    key={ id }
                    id={ id }
                    estoque={ estoque }
                    title={ title }
                    price={ price }
                    image={ thumbnail }
                    cartSize={ cartSize }
                    freeShipping={ shipping.free_shipping }
                  />
                );
              })}
        </div>
        <Categories func={ handleCategorie } />
      </div>);
  }
}
Home.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleCategorie: PropTypes.func.isRequired,
  cartSize: PropTypes.func.isRequired,
};
export default Home;
