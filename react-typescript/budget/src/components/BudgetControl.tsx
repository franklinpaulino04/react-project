import React, {Fragment} from 'react';

//Helpers
import {reviewBudget} from "../helpers";

type Props = {
    budget:number,
    budgetRest: number,
}

const BudgetControl:React.FC<Props> = ({budget, budgetRest}) => {
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

export default BudgetControl;