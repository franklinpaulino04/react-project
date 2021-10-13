import React, {Fragment, useEffect, useState} from 'react';

// Components
import Header from "./components/Header";
import Form from "./components/Form";
import Clima from "./components/Clima";
import Error from "./components/Error";

// Interface
import {ISearch} from "./Interfaces/ISearch";
import {IClimate} from "./Interfaces/IClimate";

function App() {

  const [search, setSearch] = useState<ISearch>({
    city:'',
    country:''
  });

  const [consult, setConsult] = useState<boolean>(false);
  const [result, setResult] = useState<IClimate>({
      name:'',
      main: {
          temp: 0,
          temp_max: 0,
          temp_min: 0,
      }
  });
  const [error, setError] = useState<boolean>(false);

  const { city, country } = search;

  const consultApi = async (): Promise<void> => {
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
