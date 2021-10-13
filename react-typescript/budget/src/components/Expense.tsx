import React from 'react';

// Interface
import {IExpense} from "../Interface/IExpense";

type Props = {
    expense: IExpense,
}

const Expense:React.FC<Props> = ({expense}) => {

    return (
        <li className="gastos">
            <p>
                {expense.name}
                <span className="gasto">${expense.quantity}</span>
            </p>
        </li>
    );
}

export default Expense;