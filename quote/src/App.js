import React from 'react';
import './App.css';

// Components
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
     <div className="container">
         <Header
             title='Cotizador de Seguros'
         />
         <div className="form">
             <Form/>
         </div>
     </div>
  );
}

export default App;
