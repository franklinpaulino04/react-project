import React, {Fragment} from 'react';

const Summary = ({data}) => {

    const { brand, year, plan } = data;

    if(brand === '' || year === '' || plan === '') return null;

    return(
        <Fragment>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: { brand }</li>
                <li>Año: { year }</li>
                <li>Plan: { plan }</li>
            </ul>
        </Fragment>
    );
}

export default Summary;