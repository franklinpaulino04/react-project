import React, {useEffect, useState} from 'react';
import './App.css';
import imagen from './images/cryptomonedas.png';

// Components
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import Quote from "./components/Quote";

function App() {

    const [loading, setLoading] = useState(false);
    const [saveCurrency, setSaveCurrency] = useState('');
    const [saveCurrencyCrypto, setSaveCurrencyCrypto] = useState('');
    const [result, setResult] = useState({});

    const quoteCrypto = async () => {
        if(saveCurrency === '') return;

        await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${saveCurrencyCrypto}&tsyms=${saveCurrency}`)
            .then((response) => response.json())
            .then((response) => {
                setLoading(true);
                // ocultar el spinner y mostrar el resultado
                setTimeout(() => {

                    // cambiar el estado de cargando
                    setLoading(false);
                    console.log(response);
                    // guardar cotizacion
                    setResult(response.DISPLAY[saveCurrencyCrypto][saveCurrency] );
                }, 3000);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        quoteCrypto();
    },[saveCurrency, saveCurrencyCrypto]);

  return (
      <div className="container">
          <div>
              <img src={imagen} alt="imagen cripto"/>
          </div>
          <div>
              <h1>Cotiza Criptomonedas al Instante</h1>
              <Form
                  setSaveCurrency={setSaveCurrency}
                  setSaveCurrencyCrypto={setSaveCurrencyCrypto}
              />

              { loading ? (<Spinner/> ) : (<Quote result={result}/>) }
          </div>
      </div>
  );
}

export default App;
