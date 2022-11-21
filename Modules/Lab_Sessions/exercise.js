



let fruits = ['apple', 'banana', 'cherry', 'pineapple', 'kiwi'];

var sortFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(sortFruits);

var sortFruits = fruits.map(fruit => fruit.split('').reverse().join(''));
console.log(sortFruits);

var sortFruits = fruits.filter(fruit => fruit.charAt(fruit.length - 1).includes('e'));
console.log(sortFruits);


var tempFruits = [];
var stringInput = `And when I'm gone, rejoice every time you'll hear my voice`
stringInput = stringInput.toLowerCase();

var vowelsChar = ['a', 'e', 'i', 'o', 'u'];
for (const char of stringInput) {
    if(vowelsChar.indexOf(char) === -1) {
        tempFruits += char;
    }
}

console.log(tempFruits);




//_________________________Lab 10.29__________________________
function studentAccLogIn (userName, password) {
    var res = '';
    var studentData = {name: 'Roman', userPassword: '123'}; 
    var tryCount = 0;

    if(userName === studentData.name && password === studentData.userPassword) {
        res = 'Welcome to homepage!';
    } else {
        if (tryCount < 4) {   
            tryCount++;
        }  
        res = "Locked for 30 min";  
    }
    return res;
}

console.log(studentAccLogIn('Roman', '123'));





//______________________Sunday Practice 11.30_______________________

var animalsArr = ['zebra', 'monkey'];
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var res = '';
for (var i = 0; i < animalsArr.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
        if (animalsArr[i].charAt(0) === alphabet[j]) {
            for (var k = 0; k < alphabet.length; k++) {
                if (alphabet[j] > alphabet[k]) {
                    
                } else {
                    
                }
            }
        }
    }
}
console.log(res);






var arr = [1,2,3,4,5,6];
//console.log(arr.filter(3, arr => i != number));



function removeSpecificNum (number, userArray) {
return userArray.filter(element => element != number);
    /* for(var i = 0; i < userArray.length; i++) {
        if (userArray[i] != number) {
            updated.push(userArray[i]);
        } 
    } return updated;*/
} 
console.log(removeSpecificNum(7, arr));


const newArrr2 = arr.filter(element => element != arr[i]);
console.log(newArrr2);