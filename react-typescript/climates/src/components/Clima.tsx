import React from 'react';
import {IClimate} from "../Interfaces/IClimate";

type Props = {
    result: IClimate;
}

const Clima: React.FC<Props> = ({ result }) => {

    const { name, main } = result;

    if(!name) {
        return null;
    }

    const kelvin = 273.15;

    return(
        <div className="card card-panel white col s12">
            <div className="black-text">
                <h2>El clima de { name } es: </h2>
                <p className="temperatura">
                    {(parseFloat( main.temp.toString()) - kelvin).toFixed(2) } <span>&#x2103;</span>
                </p>
                <p> Temperatura Maxima:
                    {(parseFloat( main.temp_max.toString())- kelvin).toFixed(2) } <span>&#x2103;</span>
                </p>
                <p> Temperatura Minima:
                    {(parseFloat( main.temp_min.toString() ) - kelvin).toFixed(2) } <span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
}

export default Clima;