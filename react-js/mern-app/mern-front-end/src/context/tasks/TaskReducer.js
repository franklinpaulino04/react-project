import {
    ADD_TASK,
    TASK_FORM,
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

        case ADD_TASK:
            return {
                ...state,
                tasksProject: [...state.tasksProject, action.payload],
            }

        default:
            return state;

    }
}