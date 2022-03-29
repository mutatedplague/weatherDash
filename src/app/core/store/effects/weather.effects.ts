import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { WeatherService } from '../../services/weather.service';
import { setErrorMessage } from "../actions/application.actions";
import { loadDays, loadDaysSuccess } from "../actions/weather.actions";

@Injectable()
export class WeatherEffects {

    constructor(private actions$: Actions, private weather: WeatherService) {}

    loadDays$ = createEffect(() => {
        return this.actions$.pipe(ofType(loadDays),
        switchMap(() => {
            return this.weather.getWeatherData().pipe(
            map((days) => {
                return loadDaysSuccess({ days })
            }),
            catchError((err) => {
                return of(setErrorMessage({message: err.message}));
            })
            )
        })
        )
    })

}