import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherDataService {

  /*
    Will fetch data from the OpenWeatherMap API, maybe using the 5 day forecast.
    The temperature value is what we'll focus on. We plan to display the max, min, mean, and mode temperatures for 5 days.

    We want the user to be able to insert a new value into the tracker based on the instructions. I interpret that as allowing the user to maybe add a new city into the tracker to get back different weather data.
  */

  constructor(
    private _httpClient: HttpClient
  ) { }

  private api_key = 'ddd22a4ef521e44cff1832879a3057fb';
  private units = 'metric';

  getFiveDayData(city){
    return this._httpClient.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${this.units}&APPID=${this.api_key}`);
  }

  getTempsFromList(list){
    return list.map((item) => item.main.temp);
  }

  getMin(list) {
    return Math.min(...list);
  }

  getMax(list){
    return Math.max(...list);
  }

  getMean(list){
    return (list.reduce((a,b) => a + b, 0)) / list.length;
  }

  getMode(list){
    let memo = {};
    let max;
    let maxVal = 0;

      list.forEach(item => {
        memo[item] = memo[item] ? memo[item] + 1 : 1;
      });

    // console.log('memo',memo);

    for(let val in memo){
      if(memo[val] > maxVal) { max = val; maxVal = memo[val]; }
      // console.log('max',max);
    }

    return parseFloat(max);



  }



}
