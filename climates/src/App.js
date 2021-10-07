import React, { Fragment, useEffect, useState} from 'react';
import './App.css';

// Components
import Header from "./components/Header";
import Form from "./components/Form";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {

    const [search, setSearch] = useState({
        city:'',
        country:''
    });

    const [consult, setConsult] = useState(false);
    const [result, setResult] = useState({});
    const [error, setError] = useState(false);

    const { city, country } = search;

    const consultApi = async () => {
        if(consult){
            const appId = '736414d52aa7f7c8ba3b3d78eae4e6b2';
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
            await fetch(url)
                .then((response) => response.json())
                .then((response) => {
                    setConsult(false);
                    setResult(response);

                    if(response.cod === "404"){
                        setError(true);
                    }else{
                        setError(false);
                    }
                })
                .catch((error) => console.log(error));
        }
    }

    useEffect(() => {
        consultApi();
    }, [consult]);

  return (
      <Fragment>
          <Header title="Clima Red App"/>
          <div className="contenedor-form">
              <div className="container">
                  <div className="row">
                      <div className="col m6 s12">
                          <Form
                              search={search}
                              setSearch={setSearch}
                              setConsult={setConsult}
                          />
                      </div>
                      <div className="col m6 s12">
                          {
                              (error) ? <Error msg="No hay resultados"/>
                                  : <Clima result={result}/>
                          }
                      </div>
                  </div>
              </div>
          </div>
      </Fragment>
  );
}

export default App;
