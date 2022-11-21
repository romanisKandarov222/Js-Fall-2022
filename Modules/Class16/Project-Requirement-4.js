/**
 * 
 * Create software for student enrollment and other student related activity
 *      -> Activities a student can perform:
 *          -> enrollment
 *          -> changeName
 *          -> changeCourse
 *          -> getProfile
 *          -> makePayment
 *          -> changeAddress
 *          -> dropFromCourse
 * 
 *      -> Activities a faculty can perform:
 *          -> changeName
 *          -> gradStudent
 *          -> changeCourse
 *          -> getProfile
 *          -> showMySalary
 *          -> changeAddress
 *          -> resignFromInstitute
 * 
 *          
 * Offered courses and Fee:
 *      course: QA
 *      fee: 4000
 *  
 *      course: PM
 *      fee: 3000
 * 
 *      course: Front End
 *      fee: 5000
 * 
 *      course: Full Stack
 *      fee: 8000
 * 
 * 
 */ 

// Requirements for Student
 /** 
 * 
 * -> enrollment
 *  age >= 16
 *      if not, do not enroll and show message, Student has to be of age 16 or above
 * 
 *  if invalid course name 
 *      do not enroll and show message, Please enter a valid course name. Course entered is "ABC"
 * 
 * if data is correct
 *      update attributes in studentData
 *          1. store name in Title Case
 *          2. store address in UPPERCASE
 *          3. store course-name as of in CourseData-Name
 *          4. store balance as of in CourseData-Fee
 *      generate id for the student
 *      show message, Congratulations for enrolling in XYZ course
 *                    Your student id : XX
 * 
 * 
 * -> changeName
 *  if newName is NOT same as stored-name
 *      change name in studentData and show message, Name is changed to "newName" successfully.
 *  otherwise
 *      show message, You are already registered with same name.
 * 
 * 
 * -> changeCourse
 *  if newCourseName is same as stored-course-name (ignoring cases)
 *      show message, You are already registered in the "CourseName" course.
 *  otherwise
 *      update studentData.sBalance (set it to the fee of newCourseName)
 *      update student.sCourseName
 *      show message, Your course has been updated to "newCourseName"
 * 
 * 
 * -> getProfile
 * Print profile as below:
 *      Profile:::
 *          Id: student-name
 *          Name: student-name
 *          Email: student-email
 *          Balance: student-balance
 *          Address: student-address
 * 
 * 
 * -> makePayment
 *  if balance is greater than 0
 *      update studentData.sBalance accordingly
 *      show message -> Thank you for making payment. Your updated balance is XX.yy
 *  otherwise
 *      show message, No payment is required at this time.
 * 
 * 
 * -> changeAddress
 *  student has to provide new Address and student-id as input
 *  if studentId is correct,
 *       
 * 
 * 
 *  if newAddress is NOT same as stored-name (ignoring cases)
 *      update studentData.sAddress with newAddress (store in UPPERCASE)
 *      show message, Address is changed to "newAddress" successfully.
 *  otherwise
 *      show message, You are already registered with same name.
 * 
 * 
 * -> dropFromCourse
 * student has to provide the studentId as input
 *      if provide-id is same as the studentId
 *          make student status as "Dropped"/false
 *          show message -> We will miss you; hope you join our future batch.
 *      otherwise,
 *          show message, You have entered invalid student-id
 */


 // Requirements for Faculty
 