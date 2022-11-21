//* Group project - due date Nov 20
//* Ahsan's group -> Polina Howard, Kaan Altinova, Jomy Muttathil, Roman Iskandarov, Ronveer Chakraborty, Preeya Singh, Mashrur Elahi


const Helper_Functions = require('./Helper-functions');

class Members {

membersInfo = {
    mName: '', 
    mAge: 0,
    mCourseName: '',
    mEmail: '',
    mAddress: ''
}

// Put this array of objects to Members-class due to both child-classes reference to it
membersData = [{course: 'QA', fee: 4000},
               {course: 'PM', fee: 3000},
               {course: 'Front End', fee: 5000},
               {course: 'Full Stack', fee: 8000}
];

/* 
    Common functions for child classes:
    -> changeName
    -> changeAddress
    -> getProfile 
    -> verification of course name
*/

verificationOfCourse(courseName) {
    return this.membersData.find(cData => cData.course.toUpperCase().localeCompare(courseName.toUpperCase()) === 0);
}   

changeName(updatedName) {
    if (this.membersInfo.mName.toUpperCase().localeCompare(updatedName.toUpperCase()) === 0) {
        console.log(`You are already registered with this name. Registered name: ${this.membersInfo.mName}\n`);
    } else {
        console.log(`\nName '${this.membersInfo.mName}' is changed to '${Helper_Functions.nameToTitleCase(updatedName)}' successfully.\n`);
        this.membersInfo.mName = Helper_Functions.nameToTitleCase(updatedName);
    } 
}

getProfile() {
    console.log(`Name: ${this.membersInfo.mName}
Age: ${this.membersInfo.mAge} 
Email: ${this.membersInfo.mEmail}
Address: ${this.membersInfo.mAddress}
Course: ${this.membersInfo.mCourseName}`); 
}

changeAddress(updatedAddress) {
    if (this.membersInfo.mAddress.localeCompare(updatedAddress.toUpperCase()) === 0) {
        console.log(`You are already registered with same address.\n`);
    } else {
        console.log(`\Address '${this.membersInfo.mAddress}' is changed to '${updatedAddress.toUpperCase()}' successfully.\n`);
        this.membersInfo.mAddress = updatedAddress.toUpperCase();
    }
} 
}

module.exports = Members;

