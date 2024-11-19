/**
 * lab.js - This simple JavaScript/jQuery script displays multpiiles of 3/5/7 out of the numbers 1-200
 * Requirements: jQuery must be loaded for this script to work.
 * Author:    Ikenna Ohiaeri
 * Created:   11.11.2024
 **/

var final = ''

function counting(){
//loop through 1-200 and check for multiples
    for (let i = 0; i <= 200; i++){

        // check for multiple of 3,5, and 7 and print FizzBuzzBoom if found
        if(i % 105 == 0){
            final += i + " FizzBuzzBoom!<br>";
        }
        // check for multiple of 5 and 7 and print BuzzBoom if found
        else if(i % 35 == 0){
            final += i + " BuzzBoom!<br>";
        }
        // check for multiple of 3 and 7 and print FizzBoom if found
        else if(i % 21 == 0){
            final += i + " FizzBoom!<br>";
        }
        // check for multiple of 3 and 5 and print Fizz if found
        else if(i % 15 == 0){
            final += i + " FizzBuzz!<br>";
        }
        // check for multiple of 3 and print Fizz if found
        else if(i % 3 == 0){
            final += i + " Fizz!<br>"; 
        }
        // check for multiple of 5 and print Buzz if found
        else if (i % 5 == 0){
            final += i + " Buzz!<br>";} 
        // check for multiple of 7 and print Boom if found
        else if(i % 7 == 0){
            final += i + " Boom!<br>"; 
        }
        else{
            final += i+"<br>";
        }
    }
    // return final string
    return final}
//puts final string in html output
$("#output").html(counting());


