const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser");
const path=require('path');
const axios = require('axios').default;

const app = express();
const PORT = 3001;

const Wiki_API_URL = "http://localhost:3000/location";


// setting the view engine to work with ejs
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));



app.get("/",(req,res)=>{
  res.render('pages/index',{message:""});
});

app.post("/", (req, res)=>{
  // form validation
  var user_input = req.body;

  console.log(user_input.userLoc);
  err="Error in validating location, please try again";
  /*
      VALIDATE LOCATION AND INPUT HERE

  */


  //res.render("pages/index",{message:user_input.userLoc});

  /*
  const temp_wiki= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  //const temp_wiki="Error fetching Wikipedia data for this location.";
  const temp_weather = {coord:{lon:-122.7996,lat:45.456},weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}],base:"stations",main:{temp:59.58,feels_like:58.57,temp_min:55.36,temp_max:62.69,pressure:1014,humidity:71},visibility:10000,wind:{speed:1.99,deg:181,gust:7},clouds:{all:75},dt:1634773158,sys:{type:2,id:2004622,country:"US",sunrise:1634740464,sunset:1634779026},timezone:-25200,id:0,name:"Beaverton",cod:200};
  const five_day_temp= {
      cod: 200,
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1634774400,
          main: {
            temp: 59.59,
            feels_like: 58.59,
            temp_min: 59.38,
            temp_max: 59.59,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 1008,
            humidity: 71,
            temp_kf: 0.12
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10d"
            }
          ],
          clouds: {
            all: 75
          },
          wind: {
            speed: 4.68,
            deg: 189,
            gust: 14.03
          },
          visibility: 10000,
          pop: 0.8,
          rain: {
            "3h": 0.17
          },
          sys: {
            pod: "d"
          },
          dt_txt: "2021-10-21 00:00:00"
        },
        {
          dt: 1634785200,
          main: {
            temp: 58.46,
            feels_like: 57.34,
            temp_min: 56.21,
            temp_max: 58.46,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 1008,
            humidity: 71,
            temp_kf: 1.25
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04n"
            }
          ],
          clouds: {
            all: 83
          },
          wind: {
            speed: 3.31,
            deg: 106,
            gust: 3.69
          },
          visibility: 10000,
          pop: 0.1,
          sys: {
            pod: "n"
          },
          dt_txt: "2021-10-21 03:00:00"
        },
        {
          dt: 1634796000,
          main: {
            temp: 56.71,
            feels_like: 55.47,
            temp_min: 55.27,
            temp_max: 56.71,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 1008,
            humidity: 72,
            temp_kf: 0.8
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n"
            }
          ],
          clouds: {
            all: 91
          },
          wind: {
            speed: 3.47,
            deg: 89,
            gust: 6.67
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n"
          },
          dt_txt: "2021-10-21 06:00:00"
        }
      ],
      city: {
        id: 0,
        name: "Beaverton",
        coord: {
          lat: 45.456,
          lon: -122.7996
        },
        country: "US",
        population: 0,
        timezone: -25200,
        sunrise: 1634740464,
        sunset: 1634779026
      }
    }


  const temp_location_info = {state:"Oregon", town:"Beaverton"};
  res.render("pages/results",{response_data:{wiki_data:temp_wiki, location_info:temp_location_info, weather_current:temp_weather, five_day:five_day_temp}});
  */


  if(user_input.userLoc.length<5){
    res.render("pages/index",{message:"Please enter a valid location."});
  }else{
    // request my microservice
    console.log(Wiki_API_URL+"?zip="+user_input.userLoc);
    const api_req = axios.get(Wiki_API_URL+"?zip="+user_input.userLoc)
    .then((response)=>{
      console.log(response.data);

      response_data = {
        weather_current:response.data.weather.current,
        five_day:response.data.weather.five_day,
        location_info:response.data.location_info,
        wiki_data:response.data.wikipedia
      };

      res.render("pages/results", response_data);
    })
    .catch(()=>{
      console.error("Error fetching location data");
    })
    //res.redirect("results")
  }
  /*
  if(err){
    console.error(err);
    res.send("index",{error:"Error in validating location, please try again"});
  }else{
    // no error in the form
    res.redirect("results");
  }*/
});


app.get("/results", (req, res)=>{

});


app.listen(PORT, ()=>{
  console.log("Server started on http://localhost:"+PORT);
});
