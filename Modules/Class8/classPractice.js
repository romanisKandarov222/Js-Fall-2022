
/**
 * 
 * if dayName is mon or wed or fri
 *      print "attend the class"
 * if dayName is tue or sat
 *      print "attend lab session"
 * if dayName is thu
 *      print "self study"
 * if dayName is sun
 *      print "Enjoy"
 * 
 */
var dayName = 'tue';

if (dayName.localeCompare('mon') === 0 || dayName.localeCompare('wed') === 0 || dayName.localeCompare('fri') === 0) {
    console.log('attend the class');
} else if (dayName.localeCompare('tue') === 0 || dayName.localeCompare('sat') === 0) {
    console.log('attend lab session');
} else if (dayName.localeCompare('thu') === 0) {
    console.log('self study');
} else if (dayName.localeCompare('sun') === 0) {
    console.log('enjoy');
} else {
    console.log('Enter valid day name');
}


// if 'swimming' is not present in the array, add it.
// if already present then print the index at which it is present
const sports = ['football', 'Soccer', 'Baseball'];
var lookingValue = 'swimming';

if (sports.indexOf(lookingValue)) {
    console.log(sports.indexOf(lookingValue))
} else {
    sports.push(lookingValue);
}