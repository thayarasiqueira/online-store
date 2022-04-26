import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="search">
        <label htmlFor="input-pesquisa">
          <input
            id="input-pesquisa"
            type="text"
            name="input-pesquisa"
          />
        </label>

        <Link data-testid="shopping-cart-button" to="/shoppingCart"> </Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ul />
      </div>);
  }
}
export default Home;
