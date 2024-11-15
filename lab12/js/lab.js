/**
 * lab.js - This simple JavaScript/jQuery script appends new elements to an output div
 * Requirements: jQuery must be loaded for this script to work.
 * Author:    Ikenna Ohiaeri
 * Created:   11.11.2024
 **/

//Sorting hat function
function sortingHat(str){
    //sets variable to length of str
    length = str.length;
    // gets the remainder of length divided by 4
    mod = length % 4;
    // if else statements that check the remainder and return results
    if(mod == 0){
        return'Gryffindor'
    }
    else if(mod == 1){
        return'Ravenclaw'
        }
    else if(mod == 2){
        return'Slytherin'
        }
    else if(mod == 3){
        return'Hufflepuff'
        }

}
// listen for button click
$("#button").click(function(){
    const name = $("input").val();
    house = sortingHat(name);
    $("#output").html('<div class="text"><p>' + house + '</p></div>');
})



