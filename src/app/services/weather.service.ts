import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { WeatherData } from '../Models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error('HANDLE ERROR =' + JSON.stringify(error)); // log to console instead
      // Let the app keep running by returning an empty result.
      // if (error.status === 401 || error.status === 403) {
      // if you've caught / handled the error, you don't want to rethrow it,
      // unless you also want downstream consumers to have to handle it as well.
      // }
      return of(result as T);
    };
  }

  getTopHeadLines(): Observable<WeatherData[]> {
    console.log('FETCHING WEATHER DATA...');

    const apiKey = 'FfOCzuU1ep4sDR1CuvFrKz3z0aoNtG74';
    let weatherLocation = [37.865044, 23.755045];
    let weatherLocationName = 'Glyfada';
    const fields = [
        "windSpeed",
        "windDirection",
        "temperature",
        "temperatureApparent",
        "humidity",
      ];
    const newsApi = `https://api.tomorrow.io/v4/timelines?location=${weatherLocation}&fields=${fields}&timesteps=1h&units=metric&apikey=${apiKey}`;

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
      }),
    };
    return this.http.get<WeatherData[]>(newsApi, httpOptions).pipe(
      tap((_) => console.log('WEATHER DATA FETCHED')),
      catchError(this.handleError<any[]>('getWeatherData', []))
    );
  }
}
