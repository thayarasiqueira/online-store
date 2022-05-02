import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comments extends Component {
  render() {
    const { evaluations } = this.props;

    return (
      <section>
        { evaluations.length > 0 && evaluations.map((item, index) => (
          <div key={ index } className="comments">
            <p>{ item.email }</p>
            <p>{ item.rate }</p>
            <p>{ item.comment}</p>
          </div>
        )) }
      </section>
    );
  }
}

Comments.propTypes = {
  evaluations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Comments;
