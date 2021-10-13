import React from 'react';

// Components
import Expense from "./Expense";

// Interface
import {IExpense} from "../Interface/IExpense";

type Props = {
    expenses: IExpense[];
}

const List:React.FC<Props> = ({ expenses }) => {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {expenses.map(expense => (
                <Expense
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </div>
    );
}

export default List;