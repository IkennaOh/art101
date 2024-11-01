/**
 * Author:    Ikenna Ohiaeri
 * Created:   10.31.2024
 **/

//defines an array of numbers
let numbers = [1,2,3,4,5]
console.log("Numbers Array: ", numbers);

//define function to times a variable by itself once
function doubelUp(x){
    let results = x**2;
    return results;}

//runs a function on the full array
console.log("Double Up Results: ", numbers.map(doubelUp));

//uses and anon function to square root numbers in numbers array
numbers.map(function(x){
    let results = Math.sqrt(x);
    return results;
})

// sets a variable to the anon function result version of numbers array and prints it
var mapResults = numbers.map(function(x){
    let results = Math.sqrt(x);
    return results;
});
console.log("Square Root Results: ", mapResults);