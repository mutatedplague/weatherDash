import { createAction, props } from "@ngrx/store";

import { Day } from "../models/day.model";

export const addDay = createAction('[Weather Day] Add Day', props<{ day: Day}>());