//  Due: Fri (Oct 21)


/**
 * Q1. Print the object data as mentioned above.
 */
let student1_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

/*
    name : John Doe
    state : NJ
    age : 20
    gender : M
    paymentMethod : finance
    anyExperience : true
    pastJobs : Yes (3)
        companyName : ABC
        numOfYears : 2
        title : 'DEF'

        companyName : EFG
        numOfYears : 3
        title : 'HIJ'
        
        companyName : KLM
        numOfYears : 4
        title : 'NOP'
    knownSkills : 5 (Java, Manual testing, Js basics, Programming, CS basics)
*/

let student1_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}
/*
    name : Eli hen
    state : NY
    age : 22
    gender : F
    paymentMethod : Paid
    anyExperience : false
    pastJobs : No
    knownSkills : 3 (Java, Manual testing, CS basics)
*/
for (const attr in student1_1) {
    if (attr !== 'pastJobs' && attr !== 'knownSkills') {
        console.log(`${attr} : ${student1_1[attr]}`);

    } else if (attr === 'pastJobs') {
        if (student1_1.anyExperience) {
            console.log(`${attr}: Yes (${student1_1.pastJobs.length})`);
        } else {
        console.log(`${attr}: No`);
        }

        for (exp of student1_1[attr]) {
            for(jobProperty in exp) {
                console.log(`\t${jobProperty} : ${exp[jobProperty]}`)
            }
            console.log(`\n`);
        }

    } else if (attr === 'knownSkills') {
        var skillsList = '';
        for (skills of student1_1.knownSkills) {
            skillsList += skills + ', ';
        }
        console.log(`${attr} : ${student1_1.knownSkills.length} (${skillsList.slice(0, skillsList.length - 2)})`);
    } 
}


/**
 * Q2: Print the index for SECOND occurrence of 'baseBalL' (Ignoring cases)
 * 
 * if BaseBall is NOT present in Array: print, Baseball is not present in the given array
 * 
 * if BaseBall is present Only once in Array: print, Baseball is present only once in the given array
 * 
 * if BaseBall is present two or more times in Array: print, Baseball has second occurrence at index-X
 *  
 */
let favSports_1 = ['Football', 'Soccer', 'Fishing', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
let favSports_2 = ['Football', 'Soccer', 'BaseBall', 'Ping pong', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
let favSports_3 = ['Football', 'Fishing', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running', 'Baseball', 'Baseball'];

var index = 0;
var countOfBaseball = 0;

for (let i = 0 ; i <= favSports_3.length - 1 ; i++) {
    if (favSports_3[i].toLowerCase().localeCompare('baseball') === 0) {
        index = i;
        countOfBaseball++; 
    } 
}

if (countOfBaseball == 0) {
    console.log(`'Baseball' is NOT present in the given array`);
} else if (countOfBaseball == 1) {
    console.log(`'Baseball' is present ONCE in the given array`);
} else if (countOfBaseball > 1) {
    console.log(`'Baseball' is present TWO or MORE times in the given array at index -> ${index}`);
}


/**
 * Q3. Print the total number of past experience for a student
 * 
 * Assumption:
 * In studentObject, anyExperience-attribute will be true, if has any past-experience, 
 * otherwise anyExperience-attribute will be false
 * 
 * If student has any past experience, print :
 *      studentName has total X-years of experience
 * 
  * If student has NO past experience, print :
 *      studentName has no past experience
 */
let student3_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

let student3_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}

var totalExp = 0;

for (const attribute in student3_1) {
    if(student3_1.anyExperience) {
        totalExp = student3_1.pastJobs[0].numOfYears + student3_1.pastJobs[1].numOfYears + student3_1.pastJobs[2].numOfYears;
        console.log(`${student3_1.name} has total ${totalExp}-years of experience`);
        break;
    } else {
        console.log(`${student3_1.name} has no past experience`);
        break;
    } 
}



































