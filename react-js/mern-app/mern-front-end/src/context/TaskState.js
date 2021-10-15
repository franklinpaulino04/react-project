import React, {useReducer} from 'react';

// Context
import TaskReducer from "./TaskReducer";
import TaskContext from "./TaskContext";

// Type
import {GET_TASK, TASK_FORM} from "../types/";

const TaskState = (props) => {

    const tasks = [
        { id: 1, name: 'Elegir Plataforma', state: true },
        { id: 2, name: 'Elegir Colores', state: false },
        { id: 3, name: 'Elegir Plataformas de pago', state: false },
        { id: 4, name: 'Elegir Hosting', state: true },
    ];

    const initialState = {
        form: false,
        tasks: [],
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const showForm = () => {
        dispatch({
            type: TASK_FORM,
        })
    }

    const getTasks = () => {
        dispatch({
            type: GET_TASK,
            payload: tasks,
        })
    }

    return (
        <TaskContext.Provider value={{
            form: state.form,
            tasks: state.tasks,
            showForm: showForm,
            getTasks: getTasks,
        }}>
            { props.children }
        </TaskContext.Provider>
    )
}

export default TaskState;