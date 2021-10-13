import React, {useState} from 'react';
import { generate } from 'shortid';

// Components
import Error from "./Error";
import {IExpense} from "../Interface/IExpense";

type Props = {
    setExpense: (val: IExpense) => void,
    setCreateExpense: (val: boolean) => void,
}

const Form:React.FC<Props> = ({setExpense, setCreateExpense}) => {

    const [name, setName] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);

    const nameHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    }

    const quantityHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(e.target.value));
    }

    const addExpense = (e: React.SyntheticEvent): void => {
        e.preventDefault();

        if(name.trim() === '' || isNaN(quantity) || quantity < 0) {
            setError(true);
            return;
        }

        setError(false);

        const data: IExpense = {
            name,
            quantity,
            id: generate(),
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

export default Form;