//* Group project - due date Nov 20
//* Ahsan's group -> Polina Howard, Kaan Altinova, Jomy Muttathil, Roman Iskandarov, Ronveer Chakraborty, Preeya Singh, Mashrur Elahi


const Helper_Functions = require('./Helper-functions');
const Members = require('./Members');
const moment = require('moment');



class Student extends Members {

/*  
Activities a student can perform:

    Functions from parent classes:
    -> changeName
    -> changeAddress
    -> getProfile 
    -> verification of course name

    Specific functions for Student-class:
    -> enrollment -> constructor
    -> changeCourse
    -> makePayment
    -> dropFromCourse 
*/
creationDate = moment(); // <- decided to implement Moment library to display a date of profile creation 

studentInfo = {
    sBalance: 0,  
    sStatus: true, 
    sGrade: '' 
}

static sIdNumber = 0;
static sGrade = '';



// define specific constructor for Student class instead of Enrolment-function
constructor(age, courseName, name, email, address) {
    super(); // to execute parent class constructor
    if (age <= 0 || courseName.length === 0 || name.length === 0 || email.length === 0 || address.length === 0) {
        throw `Incomplete student data provided.`
    } else {
        if (age < 16) {
            console.log(`Student has to be of age 16 or above.`);
        } else {
            const courseObj = this.verificationOfCourse(courseName);
            if (!courseObj) {
                console.log(`Please enter a valid course name. Course entered is '${courseName}'`);
                throw `Invalid course name provided.`
            } else {
                this.membersInfo.mName = Helper_Functions.nameToTitleCase(name);
                this.membersInfo.mAge = age;
                this.membersInfo.mEmail = email;
                this.membersInfo.mAddress = address.toUpperCase();
                this.studentInfo.sBalance = courseObj.fee;
                this.membersInfo.mCourseName = courseObj.course;
                Student.sIdNumber++;
                this.sIdNumber = `S_00${Student.sIdNumber}`
            }   console.log(`\nCongratulations, ${this.membersInfo.mName}, for enrolling in '${courseObj.course}' course.\nStudent id: ${this.sIdNumber}\n`);
            console.log(`Profile created: ${this.creationDate.format("MMMM DD, YYYY")}\n`);
        }
    }
}




/* displayStudentProfile(sId) {
    if (sId == this.sIdNumber) {
        console.log(`\n\t~~~~~~~~ STUDENT PROFILE ~~~~~~~~
        Name: ${this.membersInfo.mName}
        Age: ${this.membersInfo.mAge} 
        Email: ${this.membersInfo.mEmail}
        Address: ${this.membersInfo.mAddress}
        Balance: ${this.studentInfo.sBalance} 
        Course: ${this.membersInfo.mCourseName} 
        ID: ${this.sIdNumber}
        ~~~~~~~~~~~~~~~~~~~~~~~~`);
    } else {
        console.log(`Provide a valid ID number.`)
    }    
} */


getStudentProfile(sId) {
    if (sId == this.sIdNumber) {
        console.log(`\n~~~~~~~ STUDENT PROFILE ~~~~~~~\n`);
        this.getProfile(); // <- function is re-using from parent class
        console.log(`Balance: ${this.studentInfo.sBalance} 
ID: ${this.sIdNumber}
\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    } else {
        console.log(`Provide a valid ID number.`)
    }  
} 

changeStudentName(sId, updatedName) {
    if (sId == this.sIdNumber) {
        this.changeName(updatedName); // <- function is re-using from parent class
    } else {
        console.log(`Provide a valid ID number.`)
    }  
} 


makePayment(paidAmount) {
    if (this.studentInfo.sBalance > 0) {
        if (paidAmount > this.studentInfo.sBalance) {
            //toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') - comma-separator for numbers 
            console.log(`Your entered amount is more than current balance of ${this.studentInfo.sBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}. Enter correct amount.`);
        } else {
            this.studentInfo.sBalance = ((this.studentInfo.sBalance - paidAmount).toFixed(2));
            console.log(`Thank you for making payment. Your updated balance is $${(this.studentInfo.sBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))}`); 
        }
    } else {
        console.log(`No payment is required at this time.`);
    }
}

changeStudentAddress(sId, newAddress) {
    if (sId == this.sIdNumber) {
        this.changeAddress(newAddress); // <- function is re-using from parent class
    } else {
        console.log(`Provide a valid ID number.`)
    }
} 

changeCourse(sId, updatedCourse) {
    if (sId == this.sIdNumber) {
        const courseObj = this.verificationOfCourse(updatedCourse);
        if (this.membersInfo.mCourseName.localeCompare(updatedCourse.toUpperCase()) === 0) {
            console.log(`You are already registered in ${this.membersInfo.mCourseName}.\n`);
        } else if (courseObj) {
            console.log(`\Your '${this.membersInfo.mCourseName}' course has been updated to '${updatedCourse.toUpperCase()}' successfully.\n`);
            this.membersInfo.mCourseName = updatedCourse.toUpperCase();
            this.studentInfo.sBalance = courseObj.fee; 
        } else {
            console.log(`Provide correct course name.`);
        }
    } else {
        console.log(`Provide a valid ID number.`)
    }
}

dropFromCourse(sId) {
    if (this.sIdNumber == sId) {
        if (!this.sStatus) {
            //this.membersInfo.mCourseName = 'You dropped ' + `${courseObj}` + ' course';
            console.log(`You dropped ${this.membersInfo.mCourseName}-corse.`);
            console.log(`We will miss you; hope you join our future batch.`);
            var currentCourse = 'DROPPED';
            this.membersInfo.mCourseName = currentCourse;
        }    
    } else {
        console.log(`You have entered invalid student-id`);
    }
}
}

module.exports = Student;


try {
    var s1 = new Student(20, 'pm', 'peter parker', '789@gmail.com', '17 baNsoN St.');
    s1.getStudentProfile('S_001');
    s1.changeStudentName('S_001', 'John sMiTH');
    s1.getStudentProfile('S_001');
    s1.changeStudentAddress('S_001', '18th 27 aVe NY 11214');
    s1.makePayment(817);
    s1.getStudentProfile('S_001');
    
    
} catch (e) {
    console.log('Sorry, cannot proceed with the enrollment.\nPlease provide needed student data.');
}









