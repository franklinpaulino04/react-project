import React from 'react';
import style from './Form.module.css';
import useSelect from "../hooks/useSelect";
import PropTypes from 'prop-types';

const Form = ({ setCategory }) => {

    const options = [
        { value: 'general',         label: 'General' },
        { value: 'business',        label: 'Negocios' },
        { value: 'entertainment',   label: 'Entretenimiento' },
        { value: 'health',          label: 'Salud' },
        { value: 'science',         label: 'Ciencia' },
        { value: 'sports',          label: 'Deportes' },
        { value: 'technology',      label: 'Tecnología' },
    ];

    const [notice, NoticeSelect] = useSelect({stateInitial: '', options });

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategory(notice);
    }

    return(
        <div className={`${style.search} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={handleSubmit}>
                    <h2 className={style.heading}>Encuentra Noticias por Categoría</h2>
                    <NoticeSelect/>
                    <div className="input-field col s12">
                        <input type="submit" className={`${style.btn_block} btn-large amber darken-2`} value="Buscar"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

Form.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default Form;