/* <!doctype html>
    <html lang="en">
        <head>
            <title>Battleship</title>
            <meta charset="utf-8">
        </head>
    <body>
<h1>Play battleship!</h1>
<script src="battleship.js"></script>
</body>
</html> */



var location1 = 3;
var location1 = 4;
var location1 = 5;

var guess;
var hits = 0;
var guesses = 0;


var isSunk = false;

while( isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
    }
}
