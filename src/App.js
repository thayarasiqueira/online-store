import React from 'react';
import * as api from './services/api';

import './App.css';

function App() {
  api.getCategories().then((categories) => { console.log(categories); });
  api.getProductsFromCategoryAndQuery('MLB5672').then((categoriesAndQuery) => {
    console.log(categoriesAndQuery);
  });

  return (
    <div className="App">
      Teste
    </div>
  );
}

export default App;
