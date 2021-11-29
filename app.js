const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser");
const axios = require('axios').default;

const app = express();
const PORT = 3001;

const Wiki_API_URL = "http://localhost:3000/location";
const ZIP_CODE_VALIDATE_URL = "http://127.0.0.1:5000/validate_zip?zipcode=";


// setting the view engine to work with ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/public"));

app.use(bodyParser.urlencoded({extended: true}));



app.get("/", (req,res)=>{
  // main page
  res.render('pages/index',{message:""});
});



app.post("/", (req, res)=>{

  var user_input = req.body;

  err = "Error in validating location, please try again";

  // user input is validated here
  if(user_input.userLoc.length<5 || parseInt(user_input.userLoc) != user_input.userLoc){
    // if the code is less than 5, we are going to send the user an error
    res.render("pages/index",{message:"Please enter a valid zip code."});
  }else{
      // validate zip and req wiki web scraper
      const user_input_zip = user_input.userLoc;
      const validate_zip = axios.get(ZIP_CODE_VALIDATE_URL+user_input_zip)
      .then((response)=>{
        // We got a response from zip service. request the wikipedia web scraper.
        if(response.data.valid_zip != true){
          // if the zip code is not valid, we are not going to request the wikipedia
          res.render("pages/index", {message:"Invalid zip code."});
        }else{
          const wiki_weather_api_request = axios.get(Wiki_API_URL+"?zip="+user_input_zip)
          .then((response)=>{
            // got the wikipedia data correctly.

            // data we got back from the response_data
            console.log("successfully received data");

            response_data = {
              weather_current:response.data.weather.current,
              five_day:response.data.weather.five_day,
              location_info:response.data.location_info,
              wiki_data:response.data.wikipedia
            };

            // render the response page with the data
            res.render("pages/results", response_data);
          })
          .catch(()=>{
            // error getting the wikipedia data or api data.
            res.render("pages/index", {message:"Error getting location data, please try again."});
          });
        }
      })
      .catch((err)=>{
        // Error in validating the zip code, server side problem.
        res.render("pages/index", {message:"Error validating zip, please try try again."});
      });
    }
});



app.get("/results", (req, res)=>{
  // if the user got here on their own, they should be redirected
  res.redirect("/");
});



app.listen(PORT, ()=>{
  console.log("Server started on http://localhost:"+PORT);
});
