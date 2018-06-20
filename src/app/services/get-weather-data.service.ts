import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherDataService {

  /*
    Will fetch data from the OpenWeatherMap API, maybe using the 5 day forecast.
    The temperature value is what we'll focus on. We plan to display the max, min, mean, and mode temperatures for 5 days.

    We want the user to be able to insert a new value into the tracker based on the instructions. I interpret that as allowing the user to maybe add a new city into the tracker to get back different weather data.
  */

  constructor() { }
}
