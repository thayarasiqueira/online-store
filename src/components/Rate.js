import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rate extends Component {
  render() {
    const { value, change } = this.props;
    return (
      <label htmlFor={ value }>
        <input
          type="radio"
          value={ value }
          id={ value }
          name="rate"
          onChange={ change }
          data-testid={ `${value}-rating` }
        />
        {value}
      </label>
    );
  }
}

Rate.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Rate;
