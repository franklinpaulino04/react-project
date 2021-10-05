import React, {useState} from 'react';
import Error from "./Error";
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Form = ({setExpense, setCreateExpense}) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);

    const nameHandle = (e) => {
        setName(e.target.value);
    }

    const quantityHandle = (e) => {
        setQuantity(parseInt(e.target.value));
    }

    const addExpense = (e) => {
        e.preventDefault();

        if(name.trim() === '' || isNaN(quantity) || quantity < 0){
            setError(true);
            return;
        }

        setError(false);

        const data = {
            name,
            quantity,
            id: shortid.generate()
        };

        setExpense(data);
        setName('');
        setQuantity(0);
        setCreateExpense(true);
    }

    return (
        <form onSubmit={addExpense}>
            <h2>Agrega tus gastos aqui</h2>
            { error ? <Error msg="Ambos campos son obligatorios o Presupuesto Incorrecto"/> : '' }
            <div className="campo">
                <label>Nombre Gasto</label>
                <input type="text" className="u-full-width" placeholder="Ej. Transporte" onChange={nameHandle} value={name}/>
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input type="number" className="u-full-width" placeholder="Ej. 300" onChange={quantityHandle} value={quantity}/>
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
        </form>
    );
}

Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired,
}

export default Form;