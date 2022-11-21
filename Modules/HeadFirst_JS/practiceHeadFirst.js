

var name = "Joe";
var i = 0;
while(i<2) {
    console.log("Happy Birthday to you.");
    i = i + 1;
} 
console.log("Happy Birthday dear " + name + ",");
console.log("Happy Birthday to you.");






var word = "bottles";
var count = 99;
while (count > 0) {
console.log(count + " " + word + " of beer on the wall");
console.log(count + " " + word + " of beer,");
console.log("Take one down, pass it around,");
count = count - 1;
if (count > 0) {
    console.log(count + " " + word + " of beer,");
} else {
console.log("No more " + word + " of beer on the wall.");
}
}