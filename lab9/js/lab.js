/**
 * lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
 *  Requirements: jQuery must be loaded for this script to work.
 * Author:    Ikenna Ohiaeri
 * Created:   11.4.2024
 **/



console.log('you')
// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add button to problems section
$("#problems").append("<button id='button-problems'>Make Special</button>");

// add button to resultts section
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add a click listener to the problems button
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

// add a click listener to the resultsbutton
$("#button-results").click(function(){
    // now add (or subtract) the "sresut" class to the section
    $("#results").toggleClass("special");
});
