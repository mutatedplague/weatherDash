import { createAction, props } from "@ngrx/store";

import { Day } from "../../models/day.model";

export const loadDays = createAction('[Weather Day] Get All Days');
export const loadDaysSuccess = createAction('[Weather Day] Get All Days Success', props<{days: Day[]}>());