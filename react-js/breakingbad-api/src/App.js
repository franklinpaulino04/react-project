import React, {useEffect, useState} from 'react';
import './App.css';
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";

function App() {

    const [frase, setFrase] = useState({});
    const [loading, setLoading] = useState(false);

    const handleFrases = async () => {
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
