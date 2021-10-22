
/*const form = this.document.querySelector("#my-form");

form.addEventListener("submit", function(event){
  event.preventDefault();

  //check if user submit correct data

  console.log("no submit");
});
*/

function handleClick(event){
  let ele = event.target;
  console.log($(ele).siblings('.closed'));
  let toClose = $(ele).siblings()[1];

  if($(toClose).hasClass("closed")){
    // the object is already closed
    $(toClose).removeClass("closed");
    $(toClose).addClass("shown");
    $(ele).text("Show less information");
  }else{
    $(toClose).removeClass("shown");
    $(toClose).addClass("closed");
    $(ele).text("Show more information");
  }

}


/*
$(".show-more-btn").click(()=>{
  //console.log("hello");
  //console.log($(this).parent().siblings().removeClass("closed"));

  console.log($(this).name)

*/
  /*
  if($().hasClass("closed")){
    // expand the data

    e.parentElement.parentElement.removeClass("closed");
    e.parentElement.parentElement.addClass("shown");
    $(".show-more-btn").text("Show less information");
  }else{
    e.parentElement.parentElement.removeClass("shown");
    e.parentElement.parentElement.addClass("closed");
    $(".show-more-btn").text("Show more information");
  }*/
/*});*/
