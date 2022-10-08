
/*
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in the result1
 * otherwise
 *      assign 10 in the result1
 */

var sentence1 = 'Hello Dear, how are you doing?';
var result1 = sentence1.length >= 10 ? 15 : 10;
console.log(`\n\nresult1 -> ${result1}`);  


/**
 * replace all instances of a or A with 'Alpha', print the result in console.
 */

 const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 var replacedWithAlpha = sentence2.replaceAll('A', 'Alpha');
 console.log(`\n${replacedWithAlpha}`);


const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
var sentence3ToLowerCase = sentence3.toLowerCase();
console.log(`\n${sentence3ToLowerCase}`);
/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'HeaLTh' (ignore cases)
 * 3. does sentence-3 contains 'Body' (ignore cases)
 * 4. index of 'BoDy' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'BoDy' is present only once. (true or false)
 */


console.log(`\nThe lenght of sentence3 -> ${sentence3.length}`);
console.log(`\n${sentence3ToLowerCase.startsWith('HeAlTh'.toLowerCase())}`);
console.log(`\n${sentence3ToLowerCase.includes('Body'.toLowerCase())}`);
console.log(`\n${sentence3ToLowerCase.indexOf('BoDy'.toLowerCase())}`);
console.log(`\nThe last-character in sentence3 -> ${sentence3.charAt(70)}`);

var count = sentence3ToLowerCase.match(/body/g).length;
var bodyPresenceCount = count == 1 ? 'True. Word "Body" is present only once' : 'False. Word "Body" is present more than once' 
console.log(`\n${bodyPresenceCount}`);




