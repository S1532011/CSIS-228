"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: 
      Date:   

      Filename: project09-02b.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");


riderName.textContent = localStorage.getItem("riderName");
ageGroup.textContent = localStorage.getItem("ageGroup");
bikeOption.textContent = localStorage.getItem("bikeOption");
routeOption.textContent = localStorage.getItem("routeOption");
accOption.textContent = localStorage.getItem("accOption");
region.textContent = localStorage.getItem("region");
miles.textContent = localStorage.getItem("miles");
comments.textContent = localStorage.getItem("comments");
console.log(riderName.value);