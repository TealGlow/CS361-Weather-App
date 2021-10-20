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
  const temp_wiki= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  //const temp_wiki="Error fetching Wikipedia data for this location.";
  /*const temp_weather = {coord: {
        "lon": -122.7996,
        "lat": 45.456
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      base: "stations",
      main: {
        temp: 291.56,
        feels_like: 291.15,
        temp_min: 288.95,
        temp_max: 293.87,
        pressure: 1012,
        humidity: 65
      },
      visibility: 10000,
      wind: {
        speed: 0.45,
        deg: 129,
        gust: 1.79
      },
      clouds: {
        all: 99
      },
      dt: 1634428840,
      sys: {
        type: 2,
        id: 2004622,
        country: "US",
        sunrise: 1634394542,
        sunset: 1634433837
      },
      timezone: -25200,
      id: 0,
      name: "Beaverton",
      cod: 200
    };
  const temp_location_info = {state:"Oregon", town:"Beaverton"};
  res.render("pages/results",{response_data:{wiki_data:temp_wiki, location_info:temp_location_info, weather_current:temp_weather}});*/


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
        weather_5_days:response.data.weather.five_day,
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
