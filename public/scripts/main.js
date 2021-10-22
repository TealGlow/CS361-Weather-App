
/*const form = this.document.querySelector("#my-form");

form.addEventListener("submit", function(event){
  event.preventDefault();

  //check if user submit correct data

  console.log("no submit");
});
*/

$(".show-more-btn").click((e)=>{
  //console.log("hello");
  console.log(e.currentTarget.parentElement);
  $(".show-more-btn").siblings()
  if(e.parentElement.parentElement.hasClass("closed")){
    // expand the data

    e.parentElement.parentElement.removeClass("closed");
    e.parentElement.parentElement.addClass("shown");
    $(".show-more-btn").text("Show less information");
  }else{
    e.parentElement.parentElement.removeClass("shown");
    e.parentElement.parentElement.addClass("closed");
    $(".show-more-btn").text("Show more information");
  }
});
