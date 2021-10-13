import React, {Fragment, useState} from 'react';

// Components
import Error from "./Error";

type Props = {
    setBudget: (val: number) => void;
    setBudgetRest: (val: number) => void;
    setShowQuetion: (val: boolean) => void;
}

const Quetion: React.FC<Props> = ({setBudget, setBudgetRest, setShowQuetion}) => {

    const [quantity, setQuantity] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);

    const defineBudget = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        setQuantity(parseInt(e.target.value));
    }

    const addBudget = (e: React.SyntheticEvent) : void => {
        e.preventDefault();

        if(quantity < 0 || isNaN(quantity)){
            setError(true);
            return;
        }

        setError(false);
        setShowQuetion(false);
        setBudget(quantity);
        setBudgetRest(quantity);
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error msg="El Presupuesto es Incorrecto"/> : '' }
            <form onSubmit={addBudget}>
                <input type="number"
                       className="u-full-width"
                       placeholder="Coloca tu presupuesto"
                onChange={defineBudget}/>

                <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto"/>
            </form>
        </Fragment>
    );
}

export default Quetion;