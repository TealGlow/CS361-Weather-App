
/*const form = this.document.querySelector("#my-form");

form.addEventListener("submit", function(event){
  event.preventDefault();

  //check if user submit correct data

  console.log("no submit");
});
*/

$(".show-more-btn").click(()=>{
  //console.log("hello");
  if($(".wiki-data").hasClass("closed")){
    // expand the data

    $(".wiki-data").removeClass("closed");
    $(".wiki-data").addClass("shown");
    $(".show-more-btn").text("Show less information");
  }else{
    $(".wiki-data").removeClass("shown");
    $(".wiki-data").addClass("closed");
    $(".show-more-btn").text("Show more information");
  }
});
