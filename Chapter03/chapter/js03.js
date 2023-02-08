/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Malachi Maenle
     Date:   02/07/23

     Filename: js03.js
 */

// Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Function to write weekday names into the calendar
function addWeekdays() {
    let i = 0;
    let headingCells = document.getElementsByTagName("th");
    while(i < 7) {
        headingCells[i].innerHTML = weekDays[i];
        i++;
    }
}

// Function to write game information into the calendar
function showGames() {
    for(let i = 0; i < gameDates.length; i++) {
        let gameInfo = "<p>"; // Open the paragraph

        switch(gameResults[i]) {
            case "W":
                gameInfo += "<p class=\"win\">";
                break;
            case "L":
                gameInfo += "<p class=\"lose\">";
                break;
            case "S":
                gameInfo += "<p class=\"suspended\">";
                break;
            case "P":
                gameInfo += "<p class=\"postponed\">";
                break;
        }

        if(gameLocations[i] === "h") {
            gameInfo += "vs. ";
        } else if(gameLocations[i] === "a") {
            gameInfo += "@ ";
        }

        gameInfo += gameOpponents[i] + "<br>"; // Include the opponent
        gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")</p>"; // Include the result and score & close the paragraph

        //Write the information into a table cell
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
    }
}

window.addEventListener("load", addWeekdays);
window.addEventListener("load", showGames);