/**
 * Author:   Ikenna Ohiaeri
 * Created:   10.24.2024
 **/


//define array
myTransport = ["ebike, bus, friendsCar"]

//define object
myMainRide = {
    make: 'Letric',
    model: 'Xpedition',
    color: 'white',
    year: 2023,
    age: 1}

//output
document.writeln("Things I use to get around: " + myTransport + "<br>");
document.writeln("My main ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");