import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Header.css';

class Header extends Component {
  componentDidMount() {
    const { func } = this.props;
    func();
  }

  render() {
    const { size } = this.props;

    return (
      <div className="container-header">
        <h1> Online Store </h1>
        <Link to="/shoppingcart" className="shopping-cart-icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>
          <div className="cart-items-number">{ size }</div>
        </Link>
      </div>
    );
  }
}

Header.propTypes = {
  size: PropTypes.number.isRequired,
  func: PropTypes.func.isRequired,
};

export default Header;
