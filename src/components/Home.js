import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <label htmlFor="input-pesquisa">
          <input
            id="input-pesquisa"
            type="text"
            name="input-pesquisa"
          />
        </label>
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
