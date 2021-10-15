import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';

// Context
import TaskReducer from "./TaskReducer";
import TaskContext from "./TaskContext";

// Type
import {
    ADD_PROJECT,
    ADD_TASK,
    GET_PROJECT,
    GET_TASK,
    PROJECT_ACTUAL,
    REMOVE_PROJECT,
    TASK_FORM,
    VALIDATE_FORM
} from "../types/";

const TaskState = (props) => {

    const tasks = [
        { id: 1, name: 'Elegir Plataforma', state: true },
        { id: 2, name: 'Elegir Colores', state: false },
        { id: 3, name: 'Elegir Plataformas de pago', state: false },
        { id: 4, name: 'Elegir Hosting', state: true },
    ];

    const projects = [
        {id: 1, name: 'Tienda Virtual'},
        {id: 2, name: 'Intranet'},
        {id: 3, name: 'Diseño de Sitio web'},
    ]

    const initialState = {
        form: false,
        tasks: [],
        projects: [],
        errorForm: false,
        project: null,
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

    const addTask = (task) => {
        task.id = uuidv4();

        dispatch({
            type: ADD_TASK,
            payload: task,
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECT,
            payload: projects,
        })
    }

    const addProject = (project) => {
        project.id = uuidv4();

        dispatch({
            type: ADD_PROJECT,
            payload: project,
        })
    }

    const showError = () => {

        dispatch({
           type: VALIDATE_FORM,
        });
    }

    const getProject = (projectId) => {

        dispatch({
            type: PROJECT_ACTUAL,
            payload: projectId,
        });
    }

    const removeProject = (projectId) => {
        dispatch({
            type:REMOVE_PROJECT,
            payload:projectId,
        })
    }

    return (
        <TaskContext.Provider value={{
            form: state.form,
            tasks: state.tasks,
            projects: state.projects,
            errorForm: state.errorForm,
            project: state.project,
            showForm,
            getTasks,
            addTask,
            getProjects,
            addProject,
            showError,
            getProject,
            removeProject,
        }}>
            { props.children }
        </TaskContext.Provider>
    )
}

export default TaskState;