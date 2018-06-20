# Weather App Challenge

To Get the App Running:

* Globally install the Angular CLI in the  command line with `npm i -g @angular/cli`.
* In the root directory, enter `npm i` in the command line to install dependencies.
* You should now be able to run the app by entering `npm start`.

Requirements:

* Implement data tracker class that keeps track of min, max, mean, and mode values.
* insert(value) - Records a new value into the tracker
* showMin() - Show the minimum value from the recorded tracker values
* showMax() - Show the maximum value from the recorded tracker values
* showMean() - Show the mean value from the recorded tracker values

I visualized this challenge from a front end point-of-view, so I initally wanted to use Angular and incorporate a user form.

The user would enter a city that they'd like to get weather data from. Since we needed to get a list of data to do things with, I figured that getting the 5 day forecast for a given city would be ideal. I decided to simply go with the temperature data we get back.

For the insert method, I interpretted that as allowing the user to insert a new location into our "tracker" so we can get back different weather data based on location. I understand that there can be a number of ways to interpret this after looking a bit more into the API, such as maybe getting historical data, and the 'insert' function would determine the span of time you'd want to get data from.

Since the challenge stated that not too much time should be spent on this or the design portion, I cut it off right where I'm just logging out our data. I planned on adding a card element displaying the data, so if you end up seeing that, note that it's more of an afterthought.

 
