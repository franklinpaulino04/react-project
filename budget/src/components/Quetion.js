import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

// Components
import Error from "./Error";

const Quetion = ({setBudget, setBudgetRest, setShowQuetion}) => {

    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);

    const defineBudget = (e) => {
        setQuantity(parseInt(e.target.value));
    }

    const addBudget = (e) => {
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


Quetion.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setBudgetRest: PropTypes.func.isRequired,
    setShowQuetion: PropTypes.func.isRequired,
}

export default Quetion;