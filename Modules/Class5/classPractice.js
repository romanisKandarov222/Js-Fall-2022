
var fullName = 'This is the way...els'.toLowerCase();
var vNum = fullName.length > 14 && fullName.includes('els') ? 23 : 32;
console.log(`${vNum}`);  



var phrase = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
var phraseWithLowerCases = phrase.toLowerCase().indexOf('w');
console.log(`Index of 'w' -> ${phraseWithLowerCases}`);



var roomTemp = 66;
var heatStatus = roomTemp <= 65 ? 'Turn on heater' : 'Do not need a heater';
console.log(heatStatus);       