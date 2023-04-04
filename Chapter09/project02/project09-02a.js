"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Malachi Maenle
      Date:   4/3/2023

      Filename: project09-02a.js
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

let submitButton = document.getElementById("submitButton");
submitButton.onclick = showData

function showData() {
      localStorage.setItem("riderName", riderName.value);
      localStorage.setItem("ageGroup", ageGroup.value);
      localStorage.setItem("bikeOption", bikeOption.value);
      localStorage.setItem("routeOption", routeOption.value);
      localStorage.setItem("accOption", accOption.value);
      localStorage.setItem("region", region.value);
      localStorage.setItem("miles", miles.value);
      localStorage.setItem("comments", comments.value);
      location.href = "project09-02b.html";
}