import {
    ADD_TASK, REMOVE_TASK, SELECT_TASK, STATE_TASK, TASK_ACTUAL,
    TASK_FORM, TASK_UPDATE,
    TASKS_PROJECT,
} from "../../types";

export default (state, action) => {

    switch (action.type) {

        case TASK_FORM:
            return {
                ...state,
                form: true,
            }

        case TASKS_PROJECT:
            return {
                ...state,
                tasksProject: state.tasks.filter(e => e.projectId === action.payload),
            }

        case SELECT_TASK:
            return {
                ...state,
                task: state.tasksProject.filter(e => e.id === action.payload)[0],
            }

        case REMOVE_TASK:
            return {
                ...state,
                tasksProject: state.tasksProject.filter(e => e.id !== action.payload),
            }

        case ADD_TASK:
            return {
                ...state,
                tasksProject: [action.payload, ...state.tasksProject],
            }

        case STATE_TASK:
            return {
                ...state,
                tasksProject: state.tasksProject.map(task => task.id === action.payload.id ? action.payload : task),
            }

        case TASK_ACTUAL:
            return {
                ...state,
                taskSelection: action.payload,
            }

        case TASK_UPDATE:
            return {
                ...state,
                tasksProject: state.taskSelection.map(task => task.id === action.payload.id ? action.payload : task),
            }

        default:
            return state;

    }
}