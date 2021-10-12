import React, {Fragment, useState} from 'react';
import './useCryptoCurrency.css';

const useCryptoCurrency = ({ title, crytops }) => {

    const [currencyCrypto, setCurrencyCrypto] = useState('');

    const ToSelectCripto = () => (
        <Fragment>
            <label htmlFor="">{title}</label>
            <select name="currency" id="currency" onChange={e => setCurrencyCrypto(e.target.value)} value={currencyCrypto}>
                <option value="">- Seleccione una opción -</option>
                {
                    crytops.map(c => (
                        <option key={c.CoinInfo.Id} value={c.CoinInfo.Name}>{c.CoinInfo.Name}</option>
                    ))
                }

            </select>
        </Fragment>
    );

    return [currencyCrypto, ToSelectCripto];
}

export default useCryptoCurrency;