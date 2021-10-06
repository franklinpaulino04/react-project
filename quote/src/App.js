import React, {Fragment, useState} from 'react';
import './App.css';

// Components
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

function App() {

    const [summary, setSummary] = useState({
        quote: 0,
        data: {
            brand : '',
            year: '',
            plan: ''
        }
    });

    const [loading, setLoading] = useState(false);

    const { quote, data } = summary;

    return (
     <div className="container">
         <Header
             title='Cotizador de Seguros'
         />
         <div className="form">
             <Form
                 setSummary={setSummary}
                 setLoading={setLoading}
             />

             { loading ? (<Spinner/>) : (
                 <Fragment>
                     <Summary data={data}/>
                     <Result quote={quote}/>
                 </Fragment>
             ) }



             {/*{ !loading ? ( <Result quote={quote}/> ) : null }*/}

         </div>
     </div>
  );
}

export default App;
