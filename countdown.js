/*countdown timer to a certain time and date 
The increments should show on screen. 
stop when it reaches the date 
*/

// Set countdown date and time
var hawaii = new Date("Oct 31, 2020 10:10:10").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
  var cantWait = new Date().getTime();

// Calculate how long between now and my date
  var howLong = hawaii - cantWait;

  // Calculations for days, hours, minutes and seconds
  var days = Math.floor(howLong / (1000 * 60 * 60 * 24));
  var hours = Math.floor((howLong % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((howLong % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((howLong % (1000 * 60)) / 1000);

  // Show results with my id
  document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Show when countdown is done
  if (howLong < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "Time to fly!!!";
  }
}, 1000);