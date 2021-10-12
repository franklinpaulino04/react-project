import React from 'react';
import './Frase.css';

const Frase = ({ frase }) => {

    const {quote, author } = frase;

    return (
        <div className="frase">
            <h1>{quote}</h1>
            <p>{author}</p>
        </div>
    );
}

export default Frase;