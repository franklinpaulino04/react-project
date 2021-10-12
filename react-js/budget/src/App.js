import React, {useEffect, useState} from 'react';

// Components
import Quetion from "./components/Quetion";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

function App() {

    const [budget, setBudget] = useState(0);
    const [budgetRest, setBudgetRest] = useState(0);
    const [showQuetion, setShowQuetion] = useState(true);
    const [expenses, setExpenses] = useState([]);
    const [expense, setExpense] = useState({});
    const [createExpense, setCreateExpense] = useState(false);

    useEffect(() => {
        if(createExpense){

            setExpenses([
                ...expenses,
                expense
            ]);

            // Resta del presupuesto actual
            const remainingBudget = (budgetRest - expense.quantity);

            setBudgetRest(remainingBudget);
        }

        setCreateExpense(false);

    },[expense, expenses, createExpense, budgetRest]);

  return (
      <div className="container">
          <header>
              <h1>Gasto Semanal</h1>

              <div className="contenido-principal contenido">
                  { showQuetion ? // carga condicional de un componente
                      (
                          <Quetion
                          setBudget={setBudget}
                          setBudgetRest={setBudgetRest}
                          setShowQuetion={setShowQuetion}/>
                      )
                      :
                      (
                          <div className="row">
                              <div className="one-half column">
                                  <Form
                                      setExpense={setExpense}
                                      setCreateExpense={setCreateExpense}
                                  />
                              </div>
                              <div className="one-half column">
                                  <List
                                      expenses={expenses}
                                  />
                                  <BudgetControl
                                      budget={budget}
                                      budgetRest={budgetRest}
                                  />
                              </div>
                          </div>
                        )
                  }
              </div>
          </header>
      </div>
  );
}

export default App;
