
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
  $(".card").removeClass("animate__fadeInLeft")
});

$(".ii").click(function(e){
  $(".gallery").css("display","block");
});

$("#c1").click(function(e){
  $(".card1").addClass("animate__fadeInLeft");
});

$("#c2").click(function(e){
  $(".card2").addClass("animate__fadeInLeft");
});

$("#c3").click(function(e){
  $(".card3").addClass("animate__fadeInLeft");
});

$("#c4").click(function(e){
  $(".card4").addClass("animate__fadeInLeft");
});

$("#c5").click(function(e){
  $(".card5").addClass("animate__fadeInLeft");
});

$("#c6").click(function(e){
  $(".card6").addClass("animate__fadeInLeft");
});

