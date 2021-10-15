import {
    ADD_PROJECT,
    ADD_TASK,
    GET_PROJECT,
    GET_TASK,
    PROJECT_ACTUAL,
    REMOVE_PROJECT,
    TASK_FORM,
    VALIDATE_FORM
} from "../types";

export default (state, action) => {

    switch (action.type) {

        case TASK_FORM:
            return {
                ...state,
                form: true,
            }

        case GET_TASK:
            return {
                ...state,
                tasks: action.payload,
            }

        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            }

        case GET_PROJECT:
            return {
                ...state,
                projects: action.payload,
            }

        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false,
                errorForm: false,
            }

        case VALIDATE_FORM:
            return {
                ...state,
                errorForm: true,
            }

        case PROJECT_ACTUAL:
            return {
                ...state,
                project: state.projects.filter(project => project.id === action.payload)[0],
            }

        case REMOVE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload),
            }

        default:
            return state;

    }
}