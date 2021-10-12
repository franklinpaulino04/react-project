import React, {Fragment, useState} from 'react';
import './useCurrency.css';

const useCurrency = ({ title, currencies }) => {

    const [currency, setCurrency] = useState('');

    const ToSelect = () => (
        <Fragment>
            <label htmlFor="">{title}</label>
            <select name="currency" id="currency" onChange={e => setCurrency(e.target.value)} value={currency}>
                <option value="">- Seleccione una opción -</option>
                {
                    currencies.map(c => (
                        <option key={c.code} value={c.code}>{c.name}</option>
                    ))
                }

            </select>
        </Fragment>
    );

    return [currency, ToSelect];
}

export default useCurrency;