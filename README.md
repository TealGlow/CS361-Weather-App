# SoftwareDevWeatherApp

Name: Alyssa Comstock

Class: CS 361 - Software Engineering I

School: Oregon State University

Last Updated: 11/27/2021

Description: Web application that displays the current weather information, the 5 day forcast in 3 hour increments, and the information on the location.
user must enter a zip code. 


## Table of contents
- [Description](#SoftwareDevWatherApp)
- [How to Install](#how-to-install)
- [How to use] (#how-to-use)


## How to install

requirements:
- [npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en/download/)
- [Wikipedia and weather microservice](https://github.com/TealGlow/WikiWebScraper)
- [Zip code validator microservice](https://github.com/cjpdx-dev/geoJSON-imager)

Installing:
1. Go to the directory that you wish to place this program
2. Place my program there:
```
For command line:
git clone https://github.com/TealGlow/SoftwareDevWeatherApp.git
```
3. Open a terminal in the location of the app.js file:

4. install node modules / dependencies:
```
npm install
```
5. Run the program!
```
node app.js
```
6. (Optional) If you make any edits to the file, you can use nodemon to auto-rerun the program when changes are saved. Very nice if you need to change the port:
```
nodemon app.js
```

NOTE: Please run the Wikipedia and weather microservice and zip code validators before trying to use this app.

## How to use:
1. Run the wikipedia web scraper in a different instance / terminal. This should be running on port 3000.
2. Run The geojson zip code validator in a different instance / terminal.  This should be running on port 5000.
3. Run the weather application and go to http://localhost:3001/ in your browser.
4. Enter the zip code of the desired location :).
