import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import shoppingCart from './pages/ShoppingCart';
import './App.css';
import * as api from './services/api';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import Checkout from './pages/Checkout';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      cartSize: 0,
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

  updateCountCart = () => {
    const storage = JSON.parse(localStorage.getItem('id') || '[]');
    if (storage.length) {
      const cartSize = storage.map((e) => e.quantity).reduce((acc, elem) => acc + elem);
      this.setState({ cartSize });
    }
  }

  render() {
    const { list, cartSize } = this.state;

    return (
      <div className="container-home">
        <BrowserRouter>
          <Header func={ this.updateCountCart } size={ cartSize } />
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
                  handleCategorie={ this.handleCategorie }
                  cartSize={ this.updateCountCart }
                />
              ) }
            />
            <Route path="/shoppingCart" component={ shoppingCart } />
            <Route
              path="/product/:id"
              render={ (prop) => (
                <ProductDetails { ...prop } cartSize={ this.updateCountCart } />
              ) }
            />
            <Route path="/checkout" component={ Checkout } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
