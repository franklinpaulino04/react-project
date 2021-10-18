import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';

// Context
import TaskReducer from "./TaskReducer";
import TaskContext from "./TaskContext";

// Type
import {
    ADD_TASK,
    TASK_FORM,
    TASKS_PROJECT,
} from "../../types";

const TaskState = (props) => {

    const initialState = {
        tasks: [
            { id: 1, name: 'Elegir Plataforma', state: true, projectId: 1, },
            { id: 2, name: 'Elegir Colores', state: false, projectId: 2, },
            { id: 3, name: 'Elegir Plataformas de pago', state: false, projectId: 3, },
            { id: 4, name: 'Elegir Hosting', state: true, projectId: 4, },
            { id: 5, name: 'Elegir Plataforma', state: true, projectId: 1, },
            { id: 6, name: 'Elegir Colores', state: false, projectId: 2, },
            { id: 7, name: 'Elegir Plataformas de pago', state: false, projectId: 3, },
            { id: 8, name: 'Elegir Plataforma', state: true, projectId: 4, },
            { id: 9, name: 'Elegir Colores', state: false, projectId: 1, },
            { id: 10, name: 'Elegir Plataformas de pago', state: false, projectId: 2, },
            { id: 11, name: 'Elegir Plataforma', state: true, projectId: 3, },
            { id: 12, name: 'Elegir Colores', state: false, projectId: 4, },
            { id: 13, name: 'Elegir Plataformas de pago', state: false, projectId: 3, },
        ],
        tasksProject: null,
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const showForm = () => {
        dispatch({
            type: TASK_FORM,
        })
    }

    const getTasks = (projectId) => {

        dispatch({
            type: TASKS_PROJECT,
            payload: projectId,
        })
    }

    const addTask = (task) => {
        task.id = uuidv4();

        dispatch({
            type: ADD_TASK,
            payload: task,
        })
    }

    return (
        <TaskContext.Provider value={{
            form: state.form,
            tasks: state.tasks,
            tasksProject: state.tasksProject,
            showForm,
            getTasks,
            addTask,
        }}>
            { props.children }
        </TaskContext.Provider>
    )
}

export default TaskState;