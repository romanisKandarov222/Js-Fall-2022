// Question - 1 - 20
/**
 * Create a function to return an array 
 *  after removing given number from the given array
 */ 
/** 
 * Example:
 * input: [1, 2, 3, 4, 5] , 2  
 * output: [1, 3, 4, 5]
 * 
 * input: [21, 32, 12, 43, 45, 65, 12], 12
 * output: [21, 32, 43, 45, 65]
 * 
 * input: [-1, 2, 43, 65] , 11
 * output: [-1, 2, 43, 65]
 */


console.log(`_______________Question 1_______________\n`)

var numArray = [21, 32, 12, 43, 45, 65, 12];

 function removeNumFromArray(num, numArray) {
    return numArray.filter(element => element != num);
}

console.log(removeNumFromArray(12, numArray));
console.log();


// Question - 2 - 30
/**
 * Create a function to convert all student-names into Titlecase.
 * Return the updated allStudentsData
 * 
 * const updateStudentRecord = titleCaseAllStudentNames(allStudentData_3)
 * console.log(updateStudentRecord)
 * 
 */
/**
 * Example:
 * let allStudentData_3 = [{id: 1, name: 'haRrY poTteR'}, 
                           {id: 2, name: 'KiNG koNG'},                               
                           {id: 3, name: 'laNa geRe'},
                           {id: 4, name: 'cHaSe LAN'},
                           {id: 5, name: 'mAYa paSha'}];
 * output/Return:
 * [
  { id: 1, name: 'Harry Potter' },
  { id: 2, name: 'King Kong' },
  { id: 3, name: 'Lana Gere' },
  { id: 4, name: 'Chase Lan' },
  { id: 5, name: 'Maya Pasha' }
] */

console.log(`_______________Question 2_______________\n`)
 
let allStudentData_3 = [{id: 1, name: 'haRrY poTteR'}, 
                        {id: 2, name: 'KiNG koNG'},                               
                        {id: 3, name: 'laNa geRe'},
                        {id: 4, name: 'cHaSe LAN'},
                        {id: 5, name: 'mAYa paSha'}];
 
function titleCaseAllStudentNames(allStudentData) {
    var toTitleCase = [];
    
    for (data of allStudentData) {
        if (data.name) {
            var toUpperCaseFirst;
            var nameToLowerCase = data.name.toLowerCase().split(' '); 
            if (nameToLowerCase.length == 2) {
                toUpperCaseFirst = nameToLowerCase[0].charAt().toUpperCase() + nameToLowerCase[0].slice(1) + ' ' + nameToLowerCase[1].charAt(0).toUpperCase() + nameToLowerCase[1].slice(1);
                data.name = toUpperCaseFirst;
                toTitleCase.push(data.name);
            } else if (nameToLowerCase.length == 1) {
                toUpperCaseFirst = nameToLowerCase[0].charAt().toUpperCase() + nameToLowerCase[0].slice(1);
                data.name = toUpperCaseFirst;
                toTitleCase.push(data.name);
            }
        } 
     } 
     return allStudentData;
}

console.log(titleCaseAllStudentNames(allStudentData_3));
console.log();


let allStudentData2_1 = [{id: 1, name: 'haRrY'},
                         {id: 2, name: 'KiNG'},
                         {id: 3, name: 'laNa'},
                         {id: 4, name: 'cHaSe'},
                         {id: 5, name: 'mAYa'}];

const updateStudentRecord2_1 = titleCaseAllStudentNames(allStudentData2_1)
console.log(updateStudentRecord2_1);


let allStudentData3_1 = [{id: 1, name: 'leo'},
                         {id: 2, name: 'greg COlL'},
                         {id: 3, name: 'Adien Row'},
                         {id: 4, name: 'cheville jUSa'}];

const updateStudentRecord3_1 = titleCaseAllStudentNames(allStudentData3_1)
console.log(updateStudentRecord3_1);                         



// Question - 3 - 50
/**
 * Create a function to update first name for the student.
 * Student will provide the student-id and NEW FIRST NAME
 * 
 * if student is present in the records AND new FIRST name is different (or NOT EXACTLY present) than already present first name
 *      update the record with student's first name.
 *      print message -> Your name is updated successfully, new full name in the records: "firstName lastName"
 *      (show lastName if that was present already)
 * 
 * if student is present in the records AND new FIRST name is EXACTLY SAME as already present in the records
 *      Do not update the student name
 *      print message -> Provided New firstName is same as of in the records, full name in the records: "firstName lastName"
 *      (show lastName if that was present already)
 * 
 * if student-id is NOT present in the records
 *      Do not update the student name
 *      print message -> Invalid student id provided.
 */
 console.log(`_______________Question 3_______________\n`)

 let allStudentRecords_3 = [{id: 1, name: 'Adien owjh'}, 
                            {id: 2, name: 'kristEn sole'},
                            {id: 3, name: 'ReMA'}, 
                            {id: 4, name: 'chess GamE'},
                            {id: 5, name: 'mAYa'}];

function updateFirstName(sId, newFirstName, studentRecords) {
    
    const studFile = studentRecords.find(s => s.id === sId)
    if (studFile) {
        var studFirst = newFirstName.toLowerCase().split(' '); 
        if (studFirst.length == 1) {
            var updatedName = studFirst[0].charAt(0).toUpperCase() + studFirst[0].slice(1) + ' ' + newFirstName[1].charAt(0).toUpperCase() + newFirstName[1].slice(1);  
            updatedName = (newFirstName + ' ' + studFirst).split(' '); 
            var newName = newFirstName.charAt(0).toUpperCase() + newFirstName.slice(1) + ' ' + studFirst[0].charAt(0).toUpperCase() + studFirst[0].slice(1);  
            console.log(`Your name is updated successfully, new full name in the records: ${newName}`);   

        } else if (studFirst.length == 2) {
            var updatedName = (newFirstName + ' ' + studFirst[1]).split(' '); 
            var newName = updatedName[0].charAt(0).toUpperCase() + updatedName[0].slice(1) + ' ' + updatedName[1].charAt(0).toUpperCase() + updatedName[1].slice(1);  
            console.log(`Your name is updated successfully, new full name in the records: ${newName}`);
        } 
    } else {
        console.log(`Invalid student id provided.`);  
    }
}

updateFirstName(1, 'justin', allStudentRecords_3)
    // Your name is updated successfully, new full name in the records: "Justin Owjh"
updateFirstName(5, 'simmy', allStudentRecords_3);
    // Your name is updated successfully, new full name in the records: "Simmy Maya"
updateFirstName(0, 'sole', allStudentRecords_3);
    // Invalid student id provided.
updateFirstName(4, 'chess', allStudentRecords_3);
    // Your name is updated successfully, new full name in the records: "Chess Game"




