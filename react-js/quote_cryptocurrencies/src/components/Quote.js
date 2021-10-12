import React from 'react';
import './Quote.css';

const Quote = ({ result }) => {

    if(Object.keys(result).length === 0) return null;

    return(
        <div>
            <p className="price"> El precio es: <span>{result.PRICE}</span> </p>
            <p className="info"> Precio más alto del día: <span>{result.HIGHDAY}</span> </p>
            <p className="info"> Precio más bajo del día: <span>{result.LOWDAY}</span> </p>
            <p className="info"> Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span> </p>
            <p className="info"> Última Actualización: <span>{result.LASTUPDATE}</span> </p>
        </div>
    );
}

export default Quote;