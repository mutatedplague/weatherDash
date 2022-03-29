import { createReducer, on } from "@ngrx/store";

import { Day } from "../../models/day.model";
import { loadDaysSuccess } from "../actions/weather.actions";

const initialDays: Day[] = [];

export const dayReducer = createReducer<Day[]>(initialDays,
    on(loadDaysSuccess, (state, action) => {
        return {
            ...state,
            days: action.days
        }
    })
)

