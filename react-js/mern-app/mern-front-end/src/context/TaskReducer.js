import {GET_TASK, TASK_FORM} from "../types";

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

        default:
            return state;

    }
}