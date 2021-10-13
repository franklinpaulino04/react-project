import React, {useState} from 'react';

//Components
import Error from "./Error";
import {ISearch} from "../Interfaces/ISearch";

type Props = {
    search: ISearch,
    setSearch: (val: ISearch) => void;
    setConsult: (val: boolean) => void;
}

const Form: React.FC<Props> = ({search, setSearch, setConsult}) => {

    const [error,setError] = useState<boolean>(false);

    const { city, country } = search;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if(city.trim() === '' || country.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

        setConsult(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            { error ? <Error msg="Todos los campos son obligatorios"/> : ''}
            <div className="input-field col s12">
                <input type="text" name="city" id="city" value={city} onChange={handleChange} />
                <label htmlFor="city">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select name="country" id="country" value={country} onChange={handleChange}>
                    <option value=""> -- Seleccione un país -- </option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">País: </label>
            </div>
            <br/>
            <div className="input-field col s12">
                <button type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12">Buscar Clima</button>
            </div>
        </form>
    )
}

export default Form;