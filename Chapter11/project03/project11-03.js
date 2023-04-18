"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-03

      Project to retrieve order history from a web server
      Author: Malachi Maenle
      Date:   4/17/2023

      Filename: project11-03.js
*/

let orderResult = document.getElementById("orderResult");
let userIDBox = document.getElementById("userID");
let pwdBox = document.getElementById("pwd");


// Retrieve order history when the View Orders button is clicked
viewOrders.onclick = function() {
   let user = userIDBox.value;
   let pwd = pwdBox.value;

   fetch(`wworders.pl?id=${user}&pwd=${pwd}`)
   .then(e => buildOrderTable(e))
   .catch(e => console.log(e));
}


// Function to display order history within web tables
function buildOrderTable(obj) {
      if(obj.status === "Orders Not Found") {
            orderResult.innerHTML = "No orders found for this user id and password"
      } else {
            htmlCode = `<table id="summary"><tr><th>Name</th><td>${obj.username}</td><tr><th>Total Charges</th><td>${obk.totalCharges}</td></tr></table>`;
            for(let order of obj.orderHistory) {
                  htmlCode += `<table class="orderList"><tr><th colspan="2">${order.orderDate}</th><th colspan="2">${order.cost}</th></tr><tr><th>Description</th><th>Qty</th><th>Price</th><th>Total</th></tr>`;
                  for(let products of order) {
                        htmlCode += `<tr><td>${products.description}</td><td>${products.qty}</td><td>${products.price}</td><td>${products.total}</td></tr>`;
                  }
                  htmlCode += `</table>`;
            }
            orderResult.innerHTML = htmlCode;
      }
}

