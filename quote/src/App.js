import React, {useState} from 'react';
import './App.css';

// Components
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";

function App() {

    const [summary, setSummary] = useState({
        quote: 0,
        data: {
            brand : '',
            year: '',
            plan: ''
        }
    });

    const { data } = summary;

    return (
     <div className="container">
         <Header
             title='Cotizador de Seguros'
         />
         <div className="form">
             <Form
                 setSummary={setSummary}
             />

             <Summary
             data={data}
             />

         </div>
     </div>
  );
}

export default App;
