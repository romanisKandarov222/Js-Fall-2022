const moment = require('moment');
var now = moment();
console.log(now.format("MM.DD.YYYY"));


var myTeamName = 'DreamTeam';
var myTeamSize = 11;
++myTeamSize;
console.log(`I am part of ${myTeamName} team, we have total ${myTeamSize} members`);


// Print all value but NOT 'Ping pong'
let sports = ['Football', 'Soccer', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong'];

// Print all value but last-index one (using for-of)
console.log('\n\nPrint all value but last-index one (using for-of)\n\n');
let index = 0;
for (let sName of sports) {
    if (index != sports.length-1) {
        console.log(sName);
    }
    index++;
}



let favSports = ['Baseball', 'Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
for(var i = 0; i < favSports.length - 1; i++) {
    if(favSports[i].localeCompare == 'Baseball') {
        console.log(favSports[i].lastIndexOf);
    }
}



//______________________CLASS 11 Object basics-2_________________________
var studentData = {
    studentName : "Roman",
    finance : true,
    5 : '12345',
    state : ['NY', 'MN', 'PA', 'CA'],
};

studentData['dateOfBirth'] = '27 April 1988';
studentData.GPA = '3.45';
delete studentData['5'];
//when you try delete not existing attribute, JS shows 'true' as a result thinking that a deletion was successful

console.log(studentData);
console.log(studentData['finance']);





//_______________________Functions-concepts_________________________

function roundANumber (a) {
    var num = (a).toFixed(1); 
    return num;
}

console.log(`\n${roundANumber(13.444567878)}\n`);




function reversedString (input) {
    var updated = input.split('').reverse().join('');
    return updated;
} 
console.log(`${reversedString('cherry')}\n`);



/**
 * Create a function to add 2-numbers
 * 
 * 1. what is the purpose of the function?
 *      add 2 numbers (addNumbers)
 * 
 * 2. Do I need any input from user? -> Yes
 *      If Yes,
 *          a) How many inputs I need from user? (2)
 * 
 * 3. Should I return any value back to user at the end of operation/function? -> yes
 *      If Yes,
 *          what is the datatype of returned value -> number
 */
const addNumbers = (firstNum, secNum) => firstNum + secNum; 

console.log(addNumbers(2,0));




// reverse all characters in array of Strings 
function reverseString (str) {
    var characters = [];

    for (var i = str.length - 1; i > - 1; i--) {
        for (var j = str[i].length - 1; j > - 1; j--) {
            characters += str[i][j];     
        } 
    } return characters;
}
 
console.log(reverseString(['hello', 'twins']));
console.log();





