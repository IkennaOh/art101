/**
 * Author:    Ikenna Ohiaeri
 * Created:   10.28.2024
 **/


//function to sort letters of a user name
function sortUser(){
    let userName = prompt('Please enter username','');
    //turns input into an array, then sorts the letters, then joins the sorted array into final string
    return userName.split('').sort().join('');
}

//calling function

document.writeln('Sorted Username: ', sortUser())