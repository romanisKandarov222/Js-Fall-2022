/**
 * Due date: Oct 16 eod
 */


/**
 * Q1:
 * 
 * const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present but not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced value.
 * 
 */
const sports = ['Football', 'Soccer', '####', 'Rugby'];
var lookingValue = 'BASKETBALL';

if (sports.includes(lookingValue) && (sports.indexOf(lookingValue) !== 2)) {
    console.log(`\n${lookingValue} is mentioned in the sports array\n`)
} else if (sports.indexOf(lookingValue) == 2) {
    console.log(`\n${lookingValue} is present at index-2\n`);
} else {
    console.log(`\nOriginal array -> ${sports}`)
    console.log(`Deleted value from array -> ${sports.splice(2, 1, lookingValue)}`);
    console.log(`Updated array -> ${sports}`);
}    


/**
 * Q2:
 * 
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */
 var planets = ['Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];

if (planets.indexOf('Earth') == 0) {
    console.log('\nEarth is mentioned in expected index\n');
} else {
    updaterdPlanets = planets.unshift('Earth');
    console.log(`\nUpdated array -> ${planets}\n`);
}


/**
 * 
 * Q3:
 * 
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-C : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * if student score and maxScore are valid, then print "Your percentage is XX.yy and your Grade is Z"
 * 
 * studentScore = 100
 * maxScore = 150
 * 
 * (studentScore/maxStore)*100
 * 
 */
var studentScore = 133;
var maxScore = 150;
var percentage = ((studentScore/maxScore)*100).toFixed(2);

if (percentage >= 91 && percentage <= 100) {
    console.log(`Your percentage is ${percentage}%, and your grade is A`);
} else if (percentage >= 81 && percentage <= 90.99) {
    console.log(`Your percentage is ${percentage}%, and your grade is B`);
} else if (percentage >= 71 && percentage <= 80.99) {
    console.log(`Your percentage is ${percentage}%, and your grade is C`);
} else if (percentage >= 61 && percentage <= 70.99) {
    console.log(`Your percentage is ${percentage}%, and your grade is D`);
} else if (percentage >= 51 && percentage <= 60.99) {
    console.log(`Your percentage is ${percentage}%, and your grade is E`);
} else if (percentage >= 0 && percentage < 51) {
    console.log(`Your percentage is ${percentage}%, and your grade is F`);
} else {
    console.log('Invalid student score');
}

/**
 * 
 * Q4:
 * 
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 
 * 
 * 10, 12, 15, 19
 * 
 * 
 */

var number = 19;

if (number%5 == 0 || number%3 == 0) {
    if(number%5 == 0 && number%3 == 0) {
        console.log(`\n${number} divisible by 3 and 5\n`)
    } else if (number%3 == 0) {
        console.log(`\n${number} divisible by 3\n`)
    } else {
        console.log(`\n${number} divisible by 5\n`);
    }
} else {
    console.log(`\n${number} is NOT divisible by 5 or 3\n`);
}