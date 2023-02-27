"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Malachi Maenle
      Date:   2/26/2023

      Filename: project06-01.js
*/

let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function() {
      console.log(pwd.value.lenth < 8 || !(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pwd.value)))
      console.log(pwd.value !== pwd2.value)
      if(pwd.value.lenth < 8 || !(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pwd.value))) {
            pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
      } else if(pwd.value !== pwd2.value) {
            pwd.setCustomValidity("");
            pwd2.setCustomValidity("Your passwords must match");
      } else {
            pwd.setCustomValidity("");
            pwd2.setCustomValidity("");
      }
});