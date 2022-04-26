import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Categories from './components/Categories';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
          </Switch>
          <Categories />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
