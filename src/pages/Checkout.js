import React, { Component } from 'react';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      LocalStorage: [],
    };
  }

  componentDidMount() {
    const acessarLocalStorage = JSON.parse(localStorage.getItem('id') || '[]');
    this.setState({ LocalStorage: [...acessarLocalStorage] }, () => {
      const { LocalStorage } = this.state;
      if (LocalStorage.length > 0) {
        let contador = 0;
        LocalStorage.forEach((valor) => {
          contador += valor.price;
          this.setState({ totalPrice: contador });
        }, 0);
      }
    });
  }

  render() {
    const { LocalStorage, totalPrice } = this.state;
    console.log(totalPrice);
    return (
      <div>
        <section>
          {LocalStorage.length > 0
        && LocalStorage.map((product, index) => (
          <section key={ index }>
            <span>
              { product.title }
            </span>
            <span>
              { product.price }
            </span>
          </section>
        ))}

          {totalPrice > 0 ? <p>{ totalPrice }</p> : null}
        </section>
        <section>
          <form>
            <label htmlFor="input-name">
              Nome Completo:
              <input
                type="text"
                id="input-name"
                data-testid="checkout-fullname"
              />
            </label>
            <label htmlFor="input-email">
              Email:
              <input
                id="input-email"
                type="email"
                data-testid="checkout-email"
              />
            </label>
            <label htmlFor="input-CPF">
              CPF:
              <input
                type="text"
                id="input-CPF"
                data-testid="checkout-cpf"
              />
            </label>
            <label htmlFor="input-fone">
              Telefone:
              <input
                type="text"
                id="input-fone"
                data-testid="checkout-phone"
              />
            </label>
            <label htmlFor="input-cep">
              CEP:
              <input
                id="input-cep"
                type="text"
                data-testid="checkout-cep"
              />
            </label>
            <label htmlFor="input-address">
              Endereço:
              <input
                type="text"
                id="input-address"
                data-testid="checkout-address"
              />
            </label>
          </form>
        </section>
        <label htmlFor="btn-checkout">
          <button
            type="button"
            id="btn-checkout"
          >
            {' '}
            finalizar compra

          </button>
        </label>
      </div>
    );
  }
}
export default Checkout;
