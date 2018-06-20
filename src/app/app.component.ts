import { Component } from '@angular/core';
import { GetWeatherDataService } from './services/get-weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  city: String = 'New York';

  cityData: any = {
    min: Number,
    max: Number,
    mean: Number,
    mode: Number
  }
  


  constructor(
    private _getWeatherDataService: GetWeatherDataService
  ){}

  getData(city){
    this._getWeatherDataService.getFiveDayData(city)
    .subscribe((data: any) => {

      const list = data.list;

      // console.log(this._getWeatherDataService.getTempsFromList(list));

      let tempsList = this._getWeatherDataService.getTempsFromList(list);

      // We will assign values we're looking for based on list
      this.cityData.min = this._getWeatherDataService.getMin(tempsList);
      this.cityData.max = this._getWeatherDataService.getMax(tempsList);
      this.cityData.mean = this._getWeatherDataService.getMean(tempsList);
      this.cityData.mode = this._getWeatherDataService.getMode(tempsList);

      console.log('this.cityData',this.cityData);

    })
  }
}
