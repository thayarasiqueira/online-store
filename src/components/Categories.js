import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categories: '',
    };
  }

  componentDidMount = async () => {
    const categoriesApi = await api.getCategories();
    this.setState({ categories: categoriesApi });
  }

  render() {
    const { categories } = this.state;
    const { func } = this.props;

    return (
      <div className="categories">
        <h3>Categorias</h3>
        <ul>
          {categories !== ''
            && categories.map((item) => (
              <Link to="/" key={ item.id } onClick={ func }>
                <li data-testid="category" id={ item.id }>
                  {item.name}
                </li>
              </Link>
            ))}
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  func: PropTypes.func.isRequired,
};

export default Categories;
