import React from 'react';
import './card.css';
import Product from "./Product";

const Card = ({ cards, setCards }) => {

    return (
        <div className="card">
            <h2>Tu carrito de compra</h2>
            {
                cards.length === 0
                    ? <p>No hay elementos en el carrito</p>
                   : cards.map((card) => (
                       <Product
                       key={card.id}
                       product={card}
                       cards={cards}
                       setCards={setCards}
                       />
                   ))
            }
        </div>
    );
}

export default Card;