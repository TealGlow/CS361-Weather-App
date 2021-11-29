# SoftwareDevWeatherApp

Name: Alyssa Comstock

Class: CS 361 - Software Engineering I

School: Oregon State University

Last Updated: 11/27/2021

Description: Web application that displays the current weather information, the 5 day forcast in 3 hour increments, and the information on the location.
user must enter a zip code. 

Video of the application in use:

[![Weather application in use](http://img.youtube.com/vi/USQtq_w0Id0/0.jpg)](http://www.youtube.com/watch?v=USQtq_w0Id0 "Alyssa Comstock CS361 Software Engineering I Weather Application Portfolio Video")


## Table of contents
- [Description](#SoftwareDevWatherApp)
- [How to Install](#how-to-install)
- [How to use](#how-to-use)
- [Packages Used](#packages-used)
- [Assets Used](#assets-used)


## How to install

requirements:
- [npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en/download/)
- [Wikipedia and weather microservice](https://github.com/TealGlow/CS361-Wikipedia-Web-Scraper-Service)
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

## Packages used:
- Express
- EJS
- body-parser
- axios

## Assets used: 
- Background image citation: Vetsikas, Dimitris. clouds-cumulus-sky-nature-2329680. 2017. pixabay, https://pixabay.com/photos/clouds-cumulus-sky-nature-2329680/

