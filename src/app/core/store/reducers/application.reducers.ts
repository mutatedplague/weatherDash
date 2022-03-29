import { createReducer, on } from "@ngrx/store";
import { setErrorMessage } from "../actions/application.actions";

const initialData: any = {
    errorMessage: ''
};

export const applicationReducer = createReducer<{}>(initialData,
    on(setErrorMessage, (state, action) => {
        return {
            ...state,
            errorMessage: action.message
        }
    })
)

