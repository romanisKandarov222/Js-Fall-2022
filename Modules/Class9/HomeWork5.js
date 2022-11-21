// Due date : Oct-19 EOD

/**
 * Q1. Find the average of the given numbers-array
 * 
 * [1,2,3,4,5] -> 15/5 -> 3
 * [1, -1, 2, -3, 1] -> 0/5 -> 0
 * [1, 2, 1, 1, 3, 1, 2] -> 11/7 -> 1.xxx
 * 
 */

//for-loop
var numbers = [23, 12, 2, 11, 7, -10];
var sumOfNumbers = 0;
for(var i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
}
console.log(`The average of the given numbers-array with FOR-loop -> ` + sumOfNumbers/numbers.length);

//for-of loop
var sumOfNumbers_2 = 0;
for (const num of numbers) {
    sumOfNumbers_2 += num;
} 
console.log(`The average of the given numbers-array with FOR-OF loop -> ` + sumOfNumbers_2/numbers.length);

//forEach-loop
var sumOfNumbers_3 = 0;
numbers.forEach (function (num1) {
    sumOfNumbers_3 += num1;
})
console.log(`The average of the given numbers-array with FOR-OF loop -> ` + sumOfNumbers_3/numbers.length);

/**
 * Q2. Reverse a given string (word by word)
 * 
 * 'have a great day' -> day great a have
 * 'good morning' -> morning good
 * 'Learn' -> Learn
 */

let str2 = 'have a great day'   // day great a have
str2 = str2.split(' ');
let reverseStr2 = '';
for(var k = str2.length - 1; k > -1; k--) {
    reverseStr2 += str2[k] + ' '; 
}
console.log(`reverseStr2 -> ${reverseStr2.trim()}`);   // day great a have
//trim() used in last lane do cut off last ' ' after concatination

/**
 * Q3. Create abbreviation for a sentence
 * 
 * 'you live Only once' -> YLOO
 * 'you Never waLK ALONe every day' -> YNWAED
 * 'good Morning' -> 'GM'
 * 'hello dear, how are you doing?' -> HDHAYD
 */
var str3 = 'hello dear, how are you doing?';
var abbr = str3.toUpperCase().split(' ');
var newString = '';
for(var ind = 0; ind < abbr.length; ind++) {
    newString += abbr[ind].substring(0,1);
}
console.log(`abbr -> ${newString}`);



// find the index of First occurrence of 'BaseBall' (ignoring cases)
var index = 0;
var occurrence = 0;

let favSports = ['Football', 'Soccer', 'Fishing', 'Ping pong', 'Rugby', 'Baseball', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
for(var i = 0; i <= favSports.length - 1; i++) {
    if(favSports[i].toLowerCase().localeCompare('baseball') === 0) {
        index = i;
        break;
    } 
} 
console.log(`\nFirst occurrence of 'BaseBall' (ignoring cases) -> ${index}\n`);





