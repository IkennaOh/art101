/**
 * lab.js - This simple JavaScript/jQuery script appends a random yes or no to output div using an api
 * Requirements: jQuery must be loaded for this script to work.
 * Author:    Ikenna Ohiaeri
 * Created:   11.26.2024
 **/

//checks for button press then runs anon function
$("#activate").click(function(){
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request
        url: "https://yesno.wtf/api",
        // Get request
        type: "GET",
        // The type of data expected to be recived
        dataType : "json",
        // When api is successful print full object in console and put answer in output div
        success: function(data) {
            console.log(data);
            $("#output").append("<br>" + data.answer);
        },
        // If api fails print error in console
        error: function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
        }
    })
})


