import React, {useState} from 'react';
import './Form.css';
import {calculateBrand, getPlan, getYearDifference} from "../Helpder";

const Form = () => {

    const [data, setData] = useState({
        brand:'',
        year:'',
        plan:''
    });

    const [error,setError] = useState(false);

    const { brand, year, plan } = data;

    const handleInformation = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(brand.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError(true);
            return;
        }

        setError(false);
        let result = 2000;

        // obtener la diferencia de años
        const difference = getYearDifference(year);

        // por cada año hay que restar el 3%
        result -= ((difference * 3) * result) / 100;

        // Americano 15%
        // Asiatico 5%
        // Europeo 30%

        result = (calculateBrand(brand)  * result);

        // Basico aumenta 20%
        // Completo 50%

        const incrementPlan = getPlan(plan);

        result = parseFloat(incrementPlan * result).toFixed(2);
    }

    return(
        <form onSubmit={handleSubmit}>
            { error ? <div className="error">Todos los campos son obligatorios</div> : '' }
            <div>
                <label>Marca</label>
                <select name="brand" id="" value={brand} onChange={handleInformation}>
                    <option value="">Seleccione una opción</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </select>
            </div>
            <div>
                <label>Año</label>
                <select name="year" id="" value={year} onChange={handleInformation}>
                    <option value="">Seleccione una opción</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </select>
            </div>
            <div>
                <label>Plan</label>
                <input type="radio" name="plan" value="basico" checked={plan === 'basico'} onChange={handleInformation}/> Basico
                <input type="radio" name="plan" value="completo" checked={plan === 'completo'} onChange={handleInformation}/> Completo
            </div>
            <button type="submit">Cotizar</button>
        </form>
    );
}

export default Form;