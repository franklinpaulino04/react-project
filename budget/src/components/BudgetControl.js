import React, {Fragment} from 'react';
import {reviewBudget} from "../helpers";
import PropTypes from 'prop-types';

const BudgetControl = ({budget, budgetRest}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${budget}
            </div>
            <div className={reviewBudget(budget, budgetRest)}>
                Restante: ${budgetRest}
            </div>
        </Fragment>
    );
}

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    budgetRest: PropTypes.number.isRequired,
}

export default BudgetControl;