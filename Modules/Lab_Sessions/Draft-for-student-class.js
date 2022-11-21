class Student {

/*  
Activities a student can perform:
    -> enrollment
    -> changeName
    -> changeCourse
    -> getProfile
    -> makePayment
    -> changeAddress
    -> dropFromCourse 
*/


    sName = ''; 
    sAge = 0;
    sCourseName = '';
    
    sEmail = '';
    sAddress = '';
    static sIdNumber = 0;
    sBalance = 0;  
    sStatus = true;



    courseData = [{course: 'QA', fee: 4000},
                  {course: 'PM', fee: 3000},
                  {course: 'Front End', fee: 5000},
                  {course: 'Full Stack', fee: 8000}];
    

// helper-functions ___________________________________
verificationOfCourse(courseName) {
    return this.courseData.find(cData => cData.course.toUpperCase().localeCompare(courseName.toUpperCase()) === 0);
}    

nameToTitleCase(sName) {
    var sentenceArray = sName.toLowerCase().split(' '); 
    var toTitleCase = '';
       for(var ind = 0; ind < sentenceArray.length; ind++) {
           toTitleCase += sentenceArray[ind].charAt(0).toUpperCase() + sentenceArray[ind].slice(1) + ' ';     
       }
    return toTitleCase = toTitleCase.trim();
}

addressToUpperCase(sAddress) {
    return sAddress.toUpperCase();
}
//_____________________________________________________

enrollment(sAge, sCourseName, sName, sEmail, sAddress) {
    if (sAge < 16) {
        console.log(`Student has to be of age 16 or above.`);
    } else {
        const courseObj = this.verificationOfCourse(sCourseName);
        if (!courseObj) {
            console.log(`Please enter a valid course name. Course entered is ${sCourseName}`);
        } else {
            this.sName = this.nameToTitleCase(sName);
            this.sEmail = sEmail;
            this.sAddress = this.addressToUpperCase(sAddress);
            this.sBalance = courseObj.fee;
            this.sCourseName = courseObj.course;
            Student.sIdNumber++;
            this.sIdNumber = `S_00${Student.sIdNumber}`
            console.log(`\nCongratulations for enrolling in ${courseObj.course} course.\nStudent id: ${this.sIdNumber}`);
        }
    }
}

displayStudentProfile() {
    console.log(`\n\t_____ Profile _____
    Name: ${this.sName}
    Email: ${this.sEmail}
    Address: ${this.sAddress}
    Balance: ${this.sBalance} 
    Course: ${this.sCourseName} 
    ID: ${this.sIdNumber}
    ____________________`);
}

changeStudentName(updatedName) {
    if (this.sName.toUpperCase().localeCompare(updatedName.toUpperCase()) === 0) {
        console.log(`You are already registered with same name.\n`);
    } else {
        console.log(`\nName '${this.sName}' is changed to '${updatedName}' successfully.\n`);
        this.sName = this.nameToTitleCase(updatedName);
    }
}

makePayment(paidAmount) {
    if (this.sBalance > 0) {
        if (paidAmount > this.sBalance) {
            //toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') - comma-separator for numbers 
            console.log(`Your entered amount is more than current balance of ${this.sBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}. Enter correct amount.`);
        } else {
            this.sBalance = ((this.sBalance - paidAmount).toFixed(2));
            console.log(`Thank you for making payment. Your updated balance is $${(this.sBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))}`); 
        }
    } else {
        console.log(`No payment is required at this time.`);
    }
}

changeStudentAddress(sId, updatedAddress) {
    if (sId == this.sIdNumber) {
        if (this.sAddress.localeCompare(updatedAddress.toUpperCase()) === 0) {
            console.log(`You are already registered with same address.\n`);
        } else {
            console.log(`\Address '${this.sAddress}' is changed to '${updatedAddress.toUpperCase()}' successfully.\n`);
            this.sAddress = this.addressToUpperCase(updatedAddress);
        }
    } else {
        console.log(`Provide a valid ID number.`)
    }
}

changeCourse(updatedCourse) {
    const courseObj = this.verificationOfCourse(updatedCourse);
    if (this.sCourseName.localeCompare(updatedCourse.toUpperCase()) === 0) {
        console.log(`You are already registered in ${this.sCourseName}.\n`);
    } else if (courseObj) {
        console.log(`\Your '${this.sCourseName}' course has been updated to '${updatedCourse.toUpperCase()}' successfully.\n`);
        this.sCourseName = this.addressToUpperCase(updatedCourse);
        this.sBalance = courseObj.fee;
    } else {
        console.log(`Provide correct course name.`);
    }
}

dropFromCourse(sId) {
    if (this.sIdNumber == sId) {
        if (!this.sStatus) {
            console.log(`We will miss you; hope you join our future batch.`);
        }    
    } else {
        console.log(`You have entered invalid student-id`);
    }
}


}




/* var s1 = new Student();


var s2 = new Student();
s2.enrollment(18, 'full sTacK', 'jerrY', '456@gmail.com', 'oCean Avenue');
s2.displayStudentProfile();
s2.changeStudentName('Jerry Simpson');
s2.makePayment(7000);
s2.changeStudentName('Frank gerry');

s2.changeStudentAddress('S_001', 'BatH AVEnue');
s2.displayStudentProfile();
s2.dropFromCourse('S_001');
s2.changeCourse('QA');
s2.displayStudentProfile(); */



