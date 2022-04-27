import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import shoppingCart from './pages/ShoppingCart';
import './App.css';
import Categories from './components/Categories';

class App extends Component {
  render() {
    return (
      <div className="container-home">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/shoppingCart" component={ shoppingCart } />
          </Switch>
          <Categories />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
