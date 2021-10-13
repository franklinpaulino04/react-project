import React, {useEffect, useState} from 'react';

// Css
import './App.css';

// Components
import Spinner from "./components/Spinner";
import Frase from "./components/Frase";

// Interface
import {IFrase} from "./Interface/IFrase";

function App() {

    const [frase, setFrase] = useState<IFrase>({
        quote: '',
        author: ''
    });

    const [loading, setLoading] = useState<boolean>(false);

    const handleFrases = async (): Promise<void> => {
        setLoading(true);
        await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
            .then((response) => response.json())
            .then((response) => {
                setLoading(false);
                setFrase(response[0]);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        handleFrases();
    },[]);

  return (
      <div className="container">
        { loading ? (<Spinner/>) : (<Frase frase={frase} />) }

        <button onClick={handleFrases}>Obtener Frase</button>
      </div>
  );
}

export default App;
