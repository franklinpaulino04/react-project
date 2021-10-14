import React, {useReducer} from 'react';

// Context
import TaskReducer from "./TaskReducer";
import TaskContext from "./TaskContext";

// Type
import {TASK_FORM} from "../types/";

const TaskState = (props) => {

    const initialState = {
        form: false,
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const showForm = () => {
        dispatch({
            type: TASK_FORM,
        })
    }

    return (
        <TaskContext.Provider value={{
            form: state.form,
            showForm: showForm,
        }}>
            { props.children }
        </TaskContext.Provider>
    )
}

export default TaskState;