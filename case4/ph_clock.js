" use strict "
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Dominic Torres
   Date: 1/22/20 

   Filename:   ph_clock.js     

*/
//step 5
var minsLeft = "";
//step 6
var secsLeft = 15;
//step 7
var timeLeft = (minsLeft*60) + secsLeft;
//step 8
function countdown() {
   var minsLeft = Math.floor(timeLeft / 60);
   var secsLeft = timeLeft - 60 * minsLeft;
   var minsString = addLeadingZero(minsLeft);
   var minsString = addLeadingZero(secsLeft);
   document.getElementById("minutes").innerHTML = minsString;
   document.getElementById("seconds").innerHTML = secsString;
   checkTimer();
   timeLeft--;
}


/* ------------------------------------------------- */
function stopClock() {
   document.getElementById("TimeHead")
}


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
