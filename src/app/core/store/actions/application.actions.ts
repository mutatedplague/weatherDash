import { createAction, props } from "@ngrx/store";
import { Error } from "../../models/error.model";

export const setErrorMessage = createAction('[Application] Set Error Message', props<{message: Error}>());