/**
 * lab.js - This simple JavaScript/jQuery script appends new elements to an output div
 * Requirements: jQuery must be loaded for this script to work.
 * Author:    Ikenna Ohiaeri
 * Created:   12.3.2024
 **/

//checks for button press then runs anon function
$("#activate").click(function(){
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request
        url: "https://api.chucknorris.io/jokes/random",
        data: { 
          },
        // Get request
        type: "GET",
        // The type of data expected to be recived
        dataType : "json",
        // When api is successful print full object in console and put answer in output div
        success: function(data) {
            console.log(data);
            $("#output").append("<br>" + data.value + "<br>" + '<img src='+ data.icon_url + '></img>');
        },
        // If api fails print error in console
        error: function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
        }
    })
})


