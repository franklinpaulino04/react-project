import React from 'react';
import {IProduct} from "../interfaces/IProduct";

type Props = {
    product: IProduct;
    products: IProduct[];
    cards: (IProduct)[];
    setCards: (val: (IProduct)[]) => void;
    type: number;
}

const Product: React.FC<Props> = ({ product, products, cards, setCards, type }) => {

    const { id, name, price } = product;

    const selectProduct = (id: number) => {
        // @ts-ignore
        const fieldProduct: IProduct = products.find(data => data.id === id);

        setCards([
            ...cards,
            fieldProduct,
        ]);
    }

    const deleteProduct = (id: number) => {

        const fieldProduct = cards.filter(card => card.id !== id);

        setCards(fieldProduct);
    }

    return (
        <div>
            <h2>{ name }</h2>
            <p>${ price }</p>
            {
                type ? <button type="button" onClick={() => selectProduct(id)}>Comprar</button>
                         : <button type="button" onClick={() => deleteProduct(id)}>Eliminar</button>
            }

        </div>
    );
}

export default Product;