import React, {useState} from 'react';
import './Form.css';
import PropTypes from 'prop-types';

// Components
import Error from "./Error";

const Form = ({ setSearchLetter }) => {

    const [search, setSearch] = useState({
        song:'',
        artist:'',
    });

    const [error, setError] = useState(false);

    const { song, artist } = search;

    const handleChange = (e) => {
        setSearch({
            ...search, [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(song.trim() === '' || artist.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

        setSearchLetter(search);
    }

    return(
        <div className="bg-info">
            { error ? <Error msg="Todos los campos son obligatorios"/> : null }
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit} className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center"> Buscador Letras Canciones </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre Artista"
                                            onChange={handleChange }
                                            value={artist}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Nombre Canción"
                                            onChange={handleChange}
                                            value={song}/>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

Form.propTypes = {
    setSearchLetter: PropTypes.func.isRequired,
}

export default Form;