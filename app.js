const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser");
const path = require('path');
const axios = require('axios').default;

const app = express();
const PORT = 3001;

const Wiki_API_URL = "http://localhost:3000/location";
const ZIP_CODE_VALIDATE_URL = "http://127.0.0.1:5000/validate_zip?zipcode=";


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
  console.log(req.body);

  console.log(user_input.userLoc);
  err = "Error in validating location, please try again";

  /*
      VALIDATE LOCATION AND INPUT HERE

  */

  if(user_input.userLoc.length<5){
    console.log("less than 5");
    res.render("pages/index",{message:"Please enter a valid location."});
  }else{

    if(parseInt(user_input.userLoc) != user_input.userLoc){
      // might be a state and town
      res.render("pages/index",{message:"Error: Please enter a zip code."});
    }else{
      // validate zip and req wiki web scraper


      const validate_zip = axios.get(ZIP_CODE_VALIDATE_URL+user_input.userLoc)
      .then((response)=>{
        if(response.data["valid_zip"]  == true){
          // zip is valid, request the web service

          const api_req = axios.get(Wiki_API_URL+"?zip="+user_input.userLoc)
          .then((response)=>{
            // request the wiki web scraper

            // data we get back
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
            // error requesting the wikipage
            console.error("Error requesting the wiki web scraper, make sure it's running or try again.");
            res.render("pages/index",{message:"Error fetching data, try again."});
          });

        }else{
          // zip code invalid

          console.error("Error invalid zip, please enter a new zip");
          res.render("pages/index",{message:"Please enter a valid location."});
        }
      }).catch(()=>{
        console.log("Error");
        res.render("pages/index",{message:"Error validating zip code please try again."});
      });
    }

  }

});


function validateAndReq(response){
  // validate zip and req wiki web scraper

  const validate_zip = axios.get(ZIP_CODE_VALIDATE_URL+user_input.userLoc)
  .then((response)=>{
    if(response.data["valid_zip"]  == true){
      // zip is valid, request the web service

      const api_req = axios.get(Wiki_API_URL+"?zip="+user_input.userLoc)
      .then((response)=>{
        // request the wiki web scraper

        // data we get back
        response_data = {
          weather_current:response.data.weather.current,
          five_day:response.data.weather.five_day,
          location_info:response.data.location_info,
          wiki_data:response.data.wikipedia
        };

        // render the response page with the data
        res.render("pages/results.ejs", response_data);
      })
      .catch(()=>{
        // error requesting the wikipage
        console.error("Error requesting the wiki web scraper, make sure it's running or try again.");
        res.render("pages/index.ejs",{message:"Error fetching data, try again."});
      });

    }else{
      // zip code invalid

      console.error("Error invalid zip, please enter a new zip");
      res.render("pages/index.ejs",{message:"Please enter a valid location."});
    }
  }).catch(()=>{
    console.log("Error");
    res.render("pages/index.ejs",{message:"Error validating zip code please try again."});
  });
}



app.get("/results", (req, res)=>{
  res.redirect("/");
});


app.listen(PORT, ()=>{
  console.log("Server started on http://localhost:"+PORT);
});
