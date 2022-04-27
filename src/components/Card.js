import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { title, price, image } = this.props;
    return (
      <section data-testid="product" className="container-card">
        <h3>{title}</h3>
        <img src={ image } alt={ title } />
        <h4>{ price }</h4>
      </section>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
