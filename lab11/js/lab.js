/**
 * lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
 * Requirements: jQuery must be loaded for this script to work.
 * Author:    Ikenna Ohiaeri
 * Created:   11.11.2024
 **/

// function that sorts a string in aplhabetical order
function sortUser(inputString){
  //turns input into an array, then sorts the letters, then joins the sorted array into final string
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();
  // sorts input
  userNameSorted = sortUser(userName);
  // puts sorted input into our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});



