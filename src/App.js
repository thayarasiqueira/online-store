import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import shoppingCart from './pages/ShoppingCart';
import './App.css';
import * as api from './services/api';
import Categories from './components/Categories';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: '',
    };
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSearch = async () => {
    const { search } = this.state;
    const listProducts = await api.getProductsFromCategoryAndQuery('query', '', search);
    const { results } = listProducts;
    this.setState({ list: results });
  }

  handleCategorie = async ({ target }) => {
    const productsCategorie = await api.getProductsFromCategoryAndQuery(
      'categorie',
      target.id,
    );
    const { results } = productsCategorie;

    this.setState({ list: results });
  }

  render() {
    const { list } = this.state;

    return (
      <div className="container-home">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (prop) => (
                <Home
                  { ...prop }
                  productList={ list }
                  handleInputChange={ this.handleInputChange }
                  handleSearch={ this.handleSearch }
                />
              ) }
            />
            <Route path="/shoppingCart" component={ shoppingCart } />
          </Switch>
          <Categories func={ this.handleCategorie } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
