import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';

import * as api from './services/api';

import './App.css';

function App() {
  api.getCategories().then((categories) => { console.log(categories); });
  api.getProductsFromCategoryAndQuery('MLB5672').then((categoriesAndQuery) => {
    console.log(categoriesAndQuery);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
