import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';

// Context
import TaskReducer from "./ProjectReducer";
import ProjectContext from "./ProjectContext";

// Type
import {
    ADD_PROJECT,
    GET_PROJECT,
    PROJECT_ACTUAL,
    REMOVE_PROJECT, SHOW_FORM_PROJECT,
    VALIDATE_FORM
} from "../../types";

const ProjectState = (props) => {

    const projects = [
        {id: 1, name: 'Tienda Virtual'},
        {id: 2, name: 'Intranet'},
        {id: 3, name: 'Diseño de Sitio web'},
    ]

    const initialState = {
        form: false,
        projects: [],
        errorForm: false,
        project: null,
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

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

    const showForm = () => {

        dispatch({
           type: SHOW_FORM_PROJECT,
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
        <ProjectContext.Provider value={{
            form: state.form,
            projects: state.projects,
            errorForm: state.errorForm,
            project: state.project,
            getProjects,
            addProject,
            showError,
            getProject,
            removeProject,
            showForm,
        }}>
            { props.children }
        </ProjectContext.Provider>
    )
}

export default ProjectState;