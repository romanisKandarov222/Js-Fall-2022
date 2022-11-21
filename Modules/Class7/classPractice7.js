
var freindsList = ['Tom', 'Steven', 'James', 'Odrey', 'Ann']; // array of String type values
console.log(`List of my friends -> ${freindsList}\n`);
var moneyBalance = [123444, 343455, 222, 3544, 5567]; // array of number values
console.log(`My funds -> ${moneyBalance}\n`);


let studentData = [{name: 'Roman', age: 34}, 
{name: 'James', age: 23}, 
{name: 'Odrey', age: 30}, 
{name: 'Steven', age: 41}];

console.log(`\n${studentData.length}\n`);
console.log(`\n${studentData[0]}\n`);




var planets = ['Earth', 'Saturn', 'Pluto', 'Venus', 'Mars'];
console.log(`\n${planets}\n`);

var planetsToString = planets.toString();
console.log(`\n${planetsToString}\n`);


/**
 * Add 'Mars' at index-0 (unshift)
 * 
 * Add 'Venus' at index-4
 */
var planets = ['plUto', 'URANUS', 'A', 'B', 'Saturn', 'JupiTEr', 'LOL', 'Mercury', 'EaRth'];
planets.unshift('Mars');
planets.splice(4,0, 'Venus');
console.log(planets);

//_______________________________________________________________ARRAY FUNCTIONS_______________________________________________________________

//carBrand.length - finds the length of array (or number of values in an array)
var carBrand = ['Opel', 'BMW', 'Audi', 'Ford', 'Toyota', 'Infiniti', 'Mazda'];
console.log(`\nThe length of carBrand array -> ${carBrand.length}\n`);

//carBrand.toString() - converts an array values to string list (separating values with comma)
var carBrandToString = carBrand.toString();
console.log(`\nConverted carBrand array to String values, separated with comma -> ${carBrandToString}\n`)

//carBrand.join() - converts an array values to string list (with user-specified separator)
console.log(`\nConverted carBrand array to String values, separated with @-sign -> ${carBrand.join('@')}\n`);

//carBrand.pop() - removes the LAST element from an array and returns it. 
console.log(`\nRemoved LAST element of carBrand array -> ${carBrand.pop()}\n`);

//carBrand.shift() - removes the FIRST element from an array and returns it. 
console.log(`\nRemoved FIRST element of carBrand array -> ${carBrand.shift()}\n`);
console.log(`\n${carBrand}\n`);

//carBrand.push() - appends new elements to the end of an array, and returns the new length of the array.
console.log(`\nNew length of the array -> ${carBrand.push('Jeep')}\n`);
console.log(`\n${carBrand}\n`);

//carBrand.unshift() - inserts new elements at the start of an array, and returns the new length of the array.
console.log(`\nNew length of the array -> ${carBrand.unshift('KIA')}\n`);
console.log(`\n${carBrand}\n`);

//carBrand.splice() - removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(`\nDeleted values from the array -> ${carBrand.splice(2, 2, 'Ferarri', 'Tesla', 'Tesla')}\n`);
console.log(`\nNew values inserted into array -> ${carBrand}\n`);

//carBrand.concat() - combines two or more arrays. This method returns a new array without modifying any existing arrays.
var carParts = ['Engine', 'Steering wheel', 'Transmission', 'Water pump'];
var combinedArray = carBrand.concat(carParts);
console.log(`\nTwo combined array -> ${combinedArray}\n`);

//combinedArray.includes() - determines whether an array includes a certain element, returning true or false as appropriate.
console.log(`\nAn array includes particular value true/false -> ${combinedArray.includes('KIA')}\n`);

//combinedArray.indexOf() - returns the index of the FIRST occurrence of a value in an array, or -1 if it is not present.
console.log(`\nIndexOf-function returns index of specific value -> ${combinedArray.indexOf('Tesla')}\n`);

//combinedArray.lastIndexOf() - returns the index of the LAST occurrence of a value in an array, or -1 if it is not present.
console.log(`\nLastIndexOf-function returns index of specific value -> ${combinedArray.lastIndexOf('Tesla')}\n`);

//combinedArray.isArray - returns true or false value 
console.log(`\nIs combinedArray an array? true/false -> ${Array.isArray(combinedArray)}\n`);

//combinedArray.fill() - changes all array elements from start to end index to a static value and returns the modified array.
console.log(`\nNew array filled with '$_$' elements -> ${combinedArray.fill('$_$', 5, 7)}\n`);

//combinedArray.reverse() - reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(`\nNew reversed array -> ${combinedArray.reverse()}\n`);





