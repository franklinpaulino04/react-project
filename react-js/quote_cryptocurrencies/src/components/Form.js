import React, {useEffect, useState} from 'react';
import './Form.css';

// Components
import Error from './Error';

// Hooks
import useCurrency from "../hooks/useCurrency";
import useCryptoCurrency from "../hooks/useCryptoCurrency";

const Form = ({setSaveCurrency, setSaveCurrencyCrypto}) => {

    const currencies = [
        { code: 'USD', name: 'Dolar de Estados Unidos' },
        { code: 'MXN', name: 'Peso Mexicano' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Libra Esterlina' }
    ];

    const [error, setError] = useState(false);
    const [crytops, setCrytops] = useState([]);
    const [currency, ToSelect] = useCurrency({ title: 'Moneda', currencies: currencies });
    const [currencyCrypto, ToSelectCripto] = useCryptoCurrency({ title: 'Elige tu Criptomoneda', crytops: crytops});

    const consultApi = async () => {
        await fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`)
            .then((response) => response.json())
            .then((response) => {
                setCrytops(response.Data);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        consultApi();

    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currency.trim() === '' || currencyCrypto === ''){
            setError(true);
            return;
        }

        setError(false);

        setSaveCurrency(currency);
        setSaveCurrencyCrypto(currencyCrypto);
    }

    return(
        <form onSubmit={handleSubmit}>
            {error ? <Error msg = "Todos los campos son obligatorios" /> : null}
            <ToSelect/>
            <ToSelectCripto/>
            <button type="submit">Calcular</button>
        </form>
    );
}

export default Form;