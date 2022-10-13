// Due date: Oct-13 (Thu) eod

/**
 * Q1: Print the length of the country name (without using string.length or length property from string-library)
 * 
 */
 let countryName = 'Japan';
 // countryName.length;  <-- not allowed
 console.log(`Q1: The lenght of countryName -> ${countryName.split('').length}\n\n`);

 
 /**
  * Q2: find the number of words in the given sentence2
  */
 const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 console.log(`Q2: Sentence2 includes -> ${sentence2.split(' ').length} words\n\n`);


 /**
  * Q3: Create abbreviation for a 4-word sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe' -> YNWA
  */
 const sentence3 = 'you Never waLK Alone';
 let abbr = '';
 abbr = sentence3.toUpperCase().split(' ');
 var abbreviation = abbr[0].substring(0,1) + abbr[1].substring(0,1) + abbr[2].substring(0,1) + abbr[3].substring(0,1);
 /*  var k = 0;
 while (k < 4) {
 var abbreviation = abbr[k++].substring(0,1); 
 process.stdout.write(`${abbreviation}`);
 }
 var sentence3Lenght = abbr.length == 4 ? 'Q3: Abbreviation for sentence3 -> ' + abbreviation : 'Q3: Sentence has more or less than 4 words. Abbreviation is only available for 4-words sentence.';*/
 console.log(`Q3: Abbreviation for sentence3 -> ${abbreviation}\n\n`);
 

 /**
  * Q4: Convert the string value in to Titlecase
  * 
  * 'you live Only once' -> You Live Only Once
  * 'you Never waLK ALONe' -> You Never Walk Alone
  * 'have a GrEAT daY' -> 'Have A Great Day'
  */
 const sentence4 = 'you Never waLK ALONe';
 let sentence4_Titlecase = '';
 sentence4_Titlecase = sentence4.toLowerCase().split(' ');
 var toUpperCase_0 = sentence4_Titlecase[0].slice(0,1).toUpperCase().concat(sentence4_Titlecase[0].slice(1,50));
 var toUpperCase_1 = sentence4_Titlecase[1].slice(0,1).toUpperCase().concat(sentence4_Titlecase[1].slice(1,50));
 var toUpperCase_2 = sentence4_Titlecase[2].slice(0,1).toUpperCase().concat(sentence4_Titlecase[2].slice(1,50));
 var toUpperCase_3 = sentence4_Titlecase[3].slice(0,1).toUpperCase().concat(sentence4_Titlecase[3].slice(1,50));
 /*  var k_count = 0;
 var n_count = 0;
 while (k_count < sentence4_Titlecase.length && n_count < sentence4_Titlecase.length) {
 var firstCharacter = sentence4_Titlecase[k_count++].slice(0,1).toUpperCase();
 var remainingCharacters = sentence4_Titlecase[n_count++].slice(1,20);
 process.stdout.write(`${firstCharacter.concat(remainingCharacters)} `); }
 console.log('\n') */
 console.log(`Q4: Converted sentence4 -> ${toUpperCase_0.concat(' ' + toUpperCase_1, ' ' + toUpperCase_2, ' ' + toUpperCase_3)}`);
     











