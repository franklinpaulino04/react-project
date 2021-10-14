import {TASK_FORM} from "../types";

export default (state, action) => {

    switch (action.type) {
        case TASK_FORM:

            return {
                ...state,
                form: true,
            }

            break;
        default:
            return state;

    }
}