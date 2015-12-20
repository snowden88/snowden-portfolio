//twitter Button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

function initMap() {
  var myLatLng = {lat: 39.305678, lng: -77.8562204};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: myLatLng,
  });
  

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World'  
  });
}

//scripts to load when DOM is ready
$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });
	//stellar
	$(window).stellar();

  //tooltip script
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

  //textarea border color -stylistic change omitted
  //$(".message-box").css("border", "2px solid black");

  //eventlistener for keystrokes in messagebox
  $(".message-box").on("keyup", function(){
    console.log("keyup happened");
    var charCount = $(".message-box").val().length; //capturing the number of characters entered
    console.log(charCount); // printing the length of characters entered to the console to test functionality
    $("#char-count").html(charCount); // showing a running character count to the user
    if(charCount > 50) { // comparing var charCount to a set number of 50
      $("#char-count").css("color", "red"); // change the color of the counter in the DOM to let the user know to reduce the number of characters
    } else {
      $("#char-count").css("color", "black"); // change back color of counter in the DOM to let the user know it is OK to proceeed
    };
  });

  //eventlistener for submit button
  $("#button").on("click", function() {
    console.log("clicked");
    var comment = $(".message-box").val();
////////////////////////////
//    if (comment === "") { // checking for input in the textarea
//      $(".message-box").css("border", "2px solid red"); // changing the color of the text area border to prompt the user to enter a message. Using a conditional prevents the user from proceeding until they have entered data into the text-area .message-box
//    } else {
//      console.log(comment); // logging the comment to the console for testing / debug
//      $("#visible-comment").html(comment); //visibly showing the comment on the DOM
//      $(".message-box").hide(); //hiding the comment box to prevent multiple messages
//    };
///////////////////////////
    var phoneCheck = $(".phone-check").val().length;//establish a variable for the number of phone digits
    var preface = ("The Following Comment Has Been Submitted:"); // preface appears when form is sucessfully submitted
    var thankYou = ("Thank You");
    if (phoneCheck != 10) {//test to see if the user input a ten digit number
      $(".phone-check").css("border", "2px solid red")// don't allow a user to proceeed with no data for phone number
    } else if (comment === "") { // checking for input in the textarea
      $(".message-box").css("border", "2px solid red"); // changing the color of the text area border to prompt the user to enter a message. Using a conditional prevents the user from proceeding until they have entered data into the text-area .message-box
    } else {
      console.log(comment); // logging the comment to the console for testing / debug
      $("#visible-preface").html(preface); //visbily prefacing the users comment being displayed on the DOM
      $("#visible-comment").html(comment);
      $("#visible-comment").css("border", "2px solid black"); //visibly showing the comment on the DOM
      $("#visible-thanks").html(thankYou); //visibly thanking the user for submitting the form
      $(".message-box").hide();
      $(".phone-check").hide();
      $("#char-count").hide();
      $("#form-name").hide();
      $("#form-email").hide();
      $("#button").hide(); //hiding the boxes to prevent multiple messages
    };

    return false;
  });

// work section
for(var i = 0; i < works.length; ++i ) {
  $("#work").append("\
    <div class='col-sm-6 col-md-3'>\
      <a href= "+ works[i].url +" class='work-img'>\
      <img class='img-responsive' src='" + works[i].pic + "'>\
      <span class='info'><p class='proj-title'>Title:</p>" + works[i].title + "</span>\
      </a>\
    </div>\
  ");
  // border color changed by JS
  var images = $("#work img");
  if (i%2 === 0){
    $(images[i]).css("border", "2px solid black")
  } else {
    $(images[i]).css("border", "2px solid white");
  }
};

// event listener for work section
$(".work-img").mouseenter( function() {
  // used for testing console.log(this);
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});

}); //ends DOM ready scipts

