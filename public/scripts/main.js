
const ZIPCODE_SERVICE_BASE_URL = "http://127.0.0.1:5000/validate_zip?zipcode=";


function handleClick(event){
  // function that handles the show more button clicks
  // when a user clicks a button it either removes the closed tag and adds
  // the shown tag, or the other way around. Also changes the text that is shown
  // on the button so that the user knows what to expect.

  let ele = event.target;
  console.log($(ele).siblings('.closed'));
  let toClose = $(ele).siblings()[1];

  if($(toClose).hasClass("closed")){
    // the object is already closed
    $(toClose).removeClass("closed");
    $(toClose).addClass("shown");

    $(ele).text("Show less information");
  }else{
    // the object is already open, close it.

    // animate scrolling to the top while it
    // closes
    $(toClose).animate({scrollTop:0},"slow");
    $(ele).animate({scrollTop:0},"slow");


    $(toClose).removeClass("shown");
    $(toClose).addClass("closed");
    $(toClose).topScroll=0;
    $(ele).topScroll=0;
    $(ele).text("Show more information");
  }

};


/*
  FUNCTION TO VALIDATE USER ZIPCODE INPUT
*/

/*
function validateUserInput(){
  event.preventDefault();

  // check if the user input is a zip ZIPCODE
  // 97008, five digits


  // serializeArray from JQuery Docs:
  // https://api.jquery.com/serializearray/
  let val = $("#my-form").serializeArray()[0].value;
  $(".error-msg").text("");


  if(val.length < 5){
    // does not fit size requirement
    console.log("Zip code not the correct size");
    $(".error-msg").text("Please enter a valid zip code");
  }
  if(parseInt(val) != val){
    // we might be dealing with a location and state name
    console.log("might be state and zip?:", val);
  }else{
    // check if valid zip:
    var req = new XMLHttpRequest();
    var url=ZIPCODE_SERVICE_BASE_URL+val;
    //req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //req.setRequestHeader("Access-Control-Allow-Credentials", "true");


    req.open("GET", url, true);
    req.setRequestHeader("Access-Control-Allow-Origin", "*");


    console.log("waiting");
    req.onload = () => {
      if(req.readyState == 4 && req.status >= 200 && req.status < 400){
        // check and do the stuff
        let resp = JSON.parse(req.response);

        if(resp["valid_zip"] == true){
          // successful post to server "/" with data
          console.log("succ");

          var req2 = new XMLHttpRequest();
          //var url = "http:localhost:3001/";
          req2.open("POST", "/", true);
          req2.send(JSON.stringify({data:val}));

        }else{
          // zip is not valid
          console.log("Invalid zip code");
          $(".error-msg").text("Please enter a valid zip code");
          return;
        }

      }else{
        console.log("Error getting zip code");
      }
    };
    // send the data payload
    req.send();


  }
}*/
