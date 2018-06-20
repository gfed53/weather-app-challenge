// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatDividerModule,
  MatCardModule
 } from '@angular/material';

// Components
import { AppComponent } from './app.component';


// Services
import { GetWeatherDataService } from './services/get-weather-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatCardModule
  ],
  providers: [
    GetWeatherDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
