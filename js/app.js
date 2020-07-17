AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



// Set the date we're counting down to
var countDownDate = new Date("Aug 15, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("cd").innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cd").innerHTML = "EXPIRED";
  }
}, 1000);

$(".cancel").click(function(e){
  $(".response").addClass("hide");
})
var email=$("#email");

$("#submit").click(function(e){
    $.ajax({ 
    type: 'POST',
    data:{'email':email.val()},
    url: 'script/user.php', 
    success: function(data){
      $("#response").text(data);
      $(".response").removeClass("hide");}
    });
})

$(".g-cancel").click(function(e){
  $(".gallery").css("display","none");
  $(".card").addClass("hideOff");
});

$(".ii").click(function(e){
  $(".gallery").css("display","block");
});

$("#c1").click(function(e){
  $(".card1").removeClass("hideOff");
});

$("#c2").click(function(e){
  $(".card2").removeClass("hideOff");
});

$("#c3").click(function(e){
  $(".card3").removeClass("hideOff");
});

$("#c4").click(function(e){
  $(".card4").removeClass("hideOff");
});

$("#c5").click(function(e){
  $(".card5").removeClass("hideOff");
});

$("#c6").click(function(e){
  $(".card6").removeClass("hideOff");
});

