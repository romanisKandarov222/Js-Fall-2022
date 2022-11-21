//* Group project - due date Nov 20
//* Ahsan's group -> Polina Howard, Kaan Altinova, Jomy Muttathil, Roman Iskandarov, Ronveer Chakraborty, Preeya Singh, Mashrur Elahi


const Helper_Functions = require("./Helper-functions");
const Student = require("./Student");

const Members = require('./Members');
const moment = require('moment');


class Faculty extends Members {
/* 
Activities a faculty can perform:

    Functions from parent classes:
    -> changeName()
    -> changeAddress()
    -> getProfile()
    -> verificationOfCourseName()

    Specific functions for Faculty-class:
    -> showMySalary
    -> gradeStudent
    -> resignFromInstitute 
*/

facultyInfo = {
    fDegree: '',
    fSalary: 0,
    // fStatus: true, -> resignFromInstitute 
}

creationDate = moment(); 

static fIdNumber = 0;


constructor(age, courseName, name, email, address) {
    super(); // to execute parent class constructor
    if (age <= 0 || courseName.length === 0 || name.length === 0 || email.length === 0 || address.length === 0) {
        throw `Incomplete faculty data provided.`
    } else {
        if (age < 30) {
            console.log(`Faculty member has to be of age 30 or above.`);
        } else {
            const courseObj = this.verificationOfCourse(courseName);
            if (!courseObj) {
                console.log(`Please enter a valid course name. Course entered is ${courseName}`);
            } else {
                this.membersInfo.mName = Helper_Functions.nameToTitleCase(name);
                this.membersInfo.mAge = age;
                this.membersInfo.mEmail = email;
                this.membersInfo.mAddress = address.toUpperCase();
                this.membersInfo.mCourseName = courseObj.course;
                Faculty.fIdNumber++;
                this.fIdNumber = `F_00${Faculty.fIdNumber}`
            }   console.log(`\nCongratulations, ${this.membersInfo.mName}, for enrolling in '${courseObj.course}' course.\nFaculty member id: ${this.fIdNumber}`);
            console.log(`Profile created: ${this.creationDate.format("MMMM DD, YYYY")}\n`);
        }
    }
}


getFacultyProfile(facultyId) {
    if (facultyId == this.fIdNumber) {
        console.log(`\n~~~~~~~ FACULTY MEMBER PROFILE ~~~~~~~\n`);
        this.getProfile();
        console.log(`ID: ${this.fIdNumber}
\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    } else {
        console.log(`Provide a valid ID number.`)
    }  
} 

changeFacultyName(facultyId, updatedName) {
    if (facultyId == this.fIdNumber) {
        this.changeName(updatedName);
    } else {
        console.log(`Provide a valid ID number.`)
    }  
} 

}


try {
    var f1 = new Faculty(43, 'qa', 'Merry Stellar', '123@gmail.com', 'boston MI');
    f1.changeFacultyName('F_001', 'homer SipmsoN');
    f1.getFacultyProfile('F_001');
    var f2 = new Faculty(32, 'front end', 'Bob Stellar', 'qwert@gmail.com', 'BroKlyN');
    f2.changeFacultyName('F_002', 'Lisa SipmsoN');
    f2.getFacultyProfile('F_002');

} catch (e) {
    console.log('Sorry, cannot proceed with the enrollment.\nPlease provide needed faculty member data.')
}





