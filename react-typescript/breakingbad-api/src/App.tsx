import React from 'react';
import './App.css';

function App() {
  return (
      <div className="container">
        { loading ? (<Spinner/>) : (<Frase frase={frase} />) }

        <button onClick={handleFrases}>Obtener Frase</button>
      </div>
  );
}

export default App;
