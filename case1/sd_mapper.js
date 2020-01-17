" use strict "
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Dominic Torres
   Date: 1/16/20  

*/
//Step 5
var thisTime = new Date (2018, 1, 3, 3, 15, 28, 0);
// step 6
var timeStr = thisTime.toLocaleString();
// step 7
document.getElementById("timeStamp").innerHTML = timeStr;
// step 8 
var thisHour = thisTime.getHours();
// step 9 
var thisMonth = thisTime.getMonth();
// step 10
var mapNum = (2 * thisMonth + thisHour) % 24;
// step 11
var imgStr = "<img src= 'sd_sky" + mapNum + ".png'/>";
//Step 12
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);

