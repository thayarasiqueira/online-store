import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        const { title, price, image } = this.props;
        return (
            <section data-testid="product">
                <h3>{title}</h3>
                <img src={ image } alt={ title } />
                <h4>{price}</h4>
            </section>
        )
    }
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}

// Para buscar itens de uma categoria por termo (vale ressaltar, que este endpoint não necessariamente precisa receber ambos os parâmetros para funcionar):
// Tipo da requisição: GET
// Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
// Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
// Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY

export default Card;