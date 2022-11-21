/* _________________________________________________________________________________
  Create function to find average of an array
   
   1. what is the purpose of the function?
      average of an array  (avgArray)
   
   2. Do I need any input from user? -> Yes
      If Yes,
        a) How many inputs I need from user? 1 (array)
   
   3. Should I return any value back to user at the end of operation/function? -> Yes
        If Yes,
        what is the datatype of returned value -> number
   
*/
function avgArray (inputArray) {
    let total = null;
    for (let i=0 ; i <= inputArray.length-1 ; i++) {
        total = total + inputArray[i];
    }
    let avg = total / inputArray.length;
     return avg;
}

let numbers = [23, 12, 43, 10, 5, -10];
let numbers_avg = avgArray(numbers);
console.log(numbers_avg);

let numbers2 = [5, -10];
let numbers2_avg = avgArray(numbers2);
console.log(numbers2_avg);




/* _________________________________________________________________________________
Create a function to return color name(s) appearing maximum number of times in given string array
    example:
        input -> [green, blue, red, green, orange, blue, red, yellow, red, red]
        ans -> red
        input -> [green, blue, red, green, orange, blue, red, yellow, red, red, blue, orange, blue]
        ans -> blue, red
        input -> []
        ans -> 
 */

var arrayOfColors = ['red', 'blue', 'red', 'green', 'orange', 'blue', 'red', 'yellow', 'red', 'red', 'green'];
var resultArray = arrayOfColors[0];
var countGreen = 0;
var countRed = 0;
for(var i = 0; i < arrayOfColors.length; i++) {
    if (arrayOfColors[i] == 'green') {
        countGreen++;
    } else if ((arrayOfColors[i] == 'red')) {
        countRed++;
    }
}

console.log(countGreen > countRed ? 'green' : 'red');

/* _________________________________________________________________________________ 
Create a function to return reverse a given array (without using reverse-function from array-class)
    example:
    input -> [hello, laugh, live, peaceful, hopeful]
    ans -> [hopeful, peaceful, live, laugh, hello]
    input -> [hello, laugh, live, king, queen]
    ans -> [queen, king, live, laugh, hello]
*/
var firstInput = ['hello', 'laugh', 'live', 'peaceful', 'hopeful'];
var secondInput = ['color', 'dream', 'live', 'king', 'queen'];

function reversedArray (userArray) {
    var reversed = [];
    for(var i = userArray.length - 1; i > -1; i--) {
        reversed[userArray.length - 1 - i] = userArray[i];
    } return reversed;
} 
console.log(reversedArray(secondInput));




/* _________________________________________________________________________________
Create a function to return the largest string(s) from a given string array.
    example:
    input -> [hello, laugh, live, peaceful, hopeful]
    ans -> peaceful
    input -> [hello, laugh, live, king, queen]
    ans -> hello, laugh, queen 
*/

var userString_1 = ['hello', 'laughs', 'live', 'peaceful', 'hopeful'];
var userString_2 = ['hello', 'laugh', 'live', 'king', 'queen'];

function largestStringInArray (inputArray) {

    let updatedArray = inputArray[0].length;
    let longestWords = [];

    for (let i = 1; i <= inputArray.length - 1; i++) {  //began comparing 'hello' vs 'laughs', not vs 0-index
        let tempLength = inputArray[i].length;
        if (updatedArray < tempLength) {
            updatedArray = tempLength;
        }        
    } 
    
    for (let word of inputArray) {
        if (word.length === updatedArray) {
            longestWords.push(word);
        }
    }  return 'The largest string(s) from given array -> ' + longestWords;
} 
console.log();
console.log(largestStringInArray(userString_2));



/* _________________________________________________________________________________ 
Create a function to return minimum value in the given numbers-array
    example:
    input -> [12, 34, 25, 7, 4, 67, 19]
    ans -> 4
    input -> [34, 54, 12, -8, 0, 45]
    ans -> -8
    input -> [109, 65, 24, 65, 10, 11, 89, 35, 90, 10, 23, 49]
    ans -> 10
*/

var userNumbers_1 = [12, 34, 25, 7, 4, 67, 19];
var userNumbers_2 = [109, 65, 24, 65, 10, 11, 89, 35, 90, 10, 23, 49];

function minValue (userInput) {
var minimum = userInput[0];
    for(var i = 0; i < userInput.length; i++) {
        if (userInput[i] < minimum) {
            minimum = userInput[i];
        } 
    } return '\nMinimum value in the given numbers-array -> ' + minimum;
} 
console.log(minValue(userNumbers_2));




//________________________________Array Advanced functions________________________
let numbers_1 = [98, 23, 12, 54, 67];
var checkNum = (numbers_1) => numbers_1 > 50;
numbers_1 = numbers_1.filter(checkNum);
console.log(numbers_1);




var arrayOfColors_2 = ['red', 'blue', 'yellow', 'purple', 'gold', 'dark', 'magenta', 'silver', 'black'];
var findWordsGr = (arrayOfColors_2) => arrayOfColors_2.length >= 6;
const returnedArray = arrayOfColors_2.filter(findWordsGr);
console.log(returnedArray);



/* _________________________________________________________________________________
Question-1:
    Create a function to return the account object in given accountData-array and given account-id
​
    example-1:
        accountData = [
            {
                name: "Saving Account - 1",
                id: 9876
            },
            {
                name: "Saving Account - 2",
                id: 8765
            },
            {
                name: "Saving Account - 3",
                id: 7654
            },
            {
                name: "Saving Account - 4",
                id: 6543
            },
            {
                name: "Saving Account - 5",
                id: 5432
            }
        ]
        accountId = 8765
​
​
        If input is accountData and accountId, return:
            {
                name: "Saving Account - 2",
                id: 8765
            }
​
    example-2:
        accountData = [
            {
                name: "Saving Account - 1",
                id: 9876
            },
            {
                name: "Saving Account - 2",
                id: 8765
            },
            {
                name: "Saving Account - 3",
                id: 7654
            },
            {
                name: "Saving Account - 4",
                id: 6543
            },
            {
                name: "Saving Account - 5",
                id: 5432
            }
        ]
        accountId = 1234
​
​
        If input is accountData and accountId, return:
            {}
*/
console.log('______________Question 1:______________')
console.log();

accountData = [{name: "Saving Account - 1", id: 9876},
               {name: "Saving Account - 2", id: 8765},
               {name: "Saving Account - 3", id: 7654},
               {name: "Saving Account - 4", id: 6543},
               {name: "Saving Account - 5", id: 5432}]

const returnDataFromArray = (accountData, accountId) => {
    var allData = {};
    
    for (var data of accountData) {
        if (data.id === accountId) {
            allData = data;
        }
    }
    return allData;
}
console.log(returnDataFromArray(accountData, 6543))
console.log();


/* _________________________________________________________________________________
Question-2:
Create a function to return the string(s) which contain 'A' (ignoring cases) from a given string array.
    example:
    input -> [hello, laugh, live, peaceful, hopeful]
    ans -> laugh, peaceful
​
    input -> [hello, laugh, live, king, queen]
    ans -> laugh
​
    input -> [live, king, queen]
    ans -> 
*/
console.log('______________Question 2:______________')
console.log();
var input_1 = ['hello', 'laugh', 'live', 'peaceful', 'hopeful'];

function wordsContainsA (userArray) {
    var result = [];
    for (var word of userArray) {
        if (word.toLowerCase().includes('a')) {
            result.push(word);
        }
    } return result;
}
console.log(`FOR-OF loop for values contain 'a' -> ${wordsContainsA(input_1)}`);



//arrow style of function creation
const wordsContainsA_1 = (userArray) => {
    var result = [];

    for (var word of userArray) {
        if (word.toLowerCase().includes('a')) {
            result.push(word);
        }
    } return result;
}
console.log(wordsContainsA_1(input_1));
console.log();




/* _________________________________________________________________________________
Question-3:
    Note: Palindrome is when String is same when written backwards.
    eg: level <-> level
    eg: eye <-> eye
​
    Create a function to find if given string is palindrome (ignore cases).
*/
console.log('______________Question 3:______________')
console.log();
var inputNew = ['hello', 'level', 'laugh', 'true', 'eye'];

function stringToPalindrome (anyInput) {
    var res = [];
    
    for (var word of anyInput) {
        var lookingValue = word.toLowerCase().split('').reverse().join('');
        if (word.toLowerCase() === lookingValue) { 
            res.push(word);
        }
    } return res; 
}
console.log(`Palindrome function with FOR-OF loop -> ${stringToPalindrome(inputNew)}`);


const isStringPalindrome = inputNew.filter(word => word.toLowerCase() === word.toLowerCase().split('').reverse().join(''));
console.log(`Palindrome function with filter() in array -> ${isStringPalindrome}`);
console.log();