import React from 'react';

// Css
import './Card.css';

// Components

import {IProduct} from "../interfaces/IProduct";
import Product from "./Product";

type Props = {
    cards: IProduct[];
    setCards: (val: IProduct[]) => void;
};

const Card: React.FC<Props> = ({ cards, setCards }) => {

    return (
        <div className="card">
            <h2>Tu carrito de compra</h2>
            {
                cards.length === 0 ? <p>No hay elementos en el carrito</p>
                   : cards.map((card) => (
                        <Product
                            key={card.id}
                            product={card}
                            cards={cards}
                            setCards={setCards}
                            products={[]}
                            type = {0}
                            />
                    ))
            }
        </div>
    );
}

export default Card;