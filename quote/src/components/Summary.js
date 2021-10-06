import React from 'react';
import './Summary.css';
import { firstUppercase } from "../Helpder";
import PropTypes from 'prop-types';

const Summary = ({ data }) => {

    const { brand, year, plan } = data;

    if(brand === '' || year === '' || plan === '') return null;

    return(
        <div className="container-summary">
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: { firstUppercase(brand) }</li>
                <li>Plan: { firstUppercase(plan) }</li>
                <li>Año del Auto: { year }</li>
            </ul>
        </div>
    );
}

Summary.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Summary;