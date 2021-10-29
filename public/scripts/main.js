
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

}
