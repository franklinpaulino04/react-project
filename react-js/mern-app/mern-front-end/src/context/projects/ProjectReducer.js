import {
    ADD_PROJECT,
    GET_PROJECT,
    PROJECT_ACTUAL,
    REMOVE_PROJECT,
    VALIDATE_FORM
} from "../../types";

export default (state, action) => {

    switch (action.type) {

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
                project: null,
            }

        default:
            return state;

    }
}