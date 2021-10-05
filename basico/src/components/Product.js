import React from 'react';

const Product = ({ product, products, cards, setCards }) => {

    const { id, name, price } = product;

    const selectProduct = (id) => {
        const fieldProduct = products.find(data => data.id === id);

        setCards([
            ...cards,
            fieldProduct
        ]);
    }

    const deleteProduct = (id) => {

        const fieldProduct = cards.filter(card => card.id !== id);

        setCards(fieldProduct);
    }

    return (
        <div>
            <h2>{ name }</h2>
            <p>${ price }</p>
            {
                products
                    ? <button type="button" onClick={() => selectProduct(id)}>Comprar</button>
                    : <button type="button" onClick={() => deleteProduct(id)}>Eliminar</button>
            }

        </div>
    );
}

export default Product;