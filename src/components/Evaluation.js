import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rate from './Rate';

class Evaluation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rate: '',
      email: '',
      comment: '',
    };
  }

  changeValue = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  saveEvaluation = () => {
    const { rate, email, comment } = this.state;
    const { id, showEvaluation } = this.props;

    if (rate && email && comment) {
      const prevStorage = JSON.parse(localStorage.getItem('evaluation') || '[]');
      const newStorage = [...prevStorage, { id, rate, email, comment }];
      localStorage.setItem('evaluation', JSON.stringify(newStorage));
    }

    showEvaluation(id);
  }

  render() {
    return (
      <form>
        Avaliar produto:
        <div className="rating">
          <Rate value="1" change={ this.changeValue } />
          <Rate value="2" change={ this.changeValue } />
          <Rate value="3" change={ this.changeValue } />
          <Rate value="4" change={ this.changeValue } />
          <Rate value="5" change={ this.changeValue } />
        </div>
        <div className="line-2">
          <label htmlFor="email-input">
            Email:
            <input
              type="email"
              data-testid="product-detail-email"
              name="email"
              onChange={ this.changeValue }
            />
          </label>
          <label htmlFor="comment">
            Comentário (opcional):
            <textarea
              type="text"
              id="comment"
              data-testid="product-detail-evaluation"
              name="comment"
              onChange={ this.changeValue }
            />
          </label>
        </div>
        <button
          type="button"
          onClick={ this.saveEvaluation }
          data-testid="submit-review-btn"
          className="btn"
        >
          Avaliar
        </button>
      </form>
    );
  }
}

Evaluation.propTypes = {
  id: PropTypes.string.isRequired,
  showEvaluation: PropTypes.func.isRequired,
};

export default Evaluation;
