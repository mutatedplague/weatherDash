import { createReducer, on } from "@ngrx/store";

import { Day } from "../models/day.model";
import { addDay } from "./weather.actions";

const initialDays: Day[] = [];

export const dayReducer = createReducer<Day[]>(initialDays,
    on(addDay, (state, action) => state.concat(action.day)),
)

