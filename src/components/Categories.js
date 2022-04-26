import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    return (
      <div>
        <ul>
          {categories !== ''
            && categories.map((item) => (
              <Link to="/" key={ item.id }>
                <li data-testid="category">
                  {item.name}
                </li>
              </Link>
            ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
