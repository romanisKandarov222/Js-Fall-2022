
/**
 Create a weather app
 - Get the weather type of the day eg. Sunny, Rainy, Cloudy, Windy etc
 - Store weather type into an array for next 5 days
 - Based on the weather type print "Show Sun Icon", "Show Rain Icon", "Show Cloud Icon", "Show Wind Icon" etc
 - Continue to print forecast for next 5 days
 
 *Output:
 * Day 1 -> Show sun icon
 * Day 2 -> Rain icon
 * Day 3 -> cloud icon
 * Day 4 -> Rain icon
 * Day 5 -> cloud icon
 */
var weather = ['Windy', 'Rainy', 'Windy', 'Cloudy'];
var icons = [];

for(var i = 0; i < weather.length; i++) {
    if(weather[i].includes('Sunny')) {
        weather[i] = 'Show sun icon';
        icons[i] = weather[i] ;
    } else if(weather[i].includes('Rainy')) {
        weather[i] = 'Show rain icon';
        icons[i] = weather[i];
    } else if(weather[i].includes('Cloudy')) {
        weather[i] = 'Show cloud icon';  
        icons[i] = weather[i]; 
    } else if(weather[i].includes('Windy')) {
        weather[i] = 'Show wind icon';  
        icons[i] = weather[i];
    } 
    
}
console.log(icons);





//multiply indexes with next pattern 
//2*3, 2*4, 2*5 = 24
//3*4, 3*5 = 27
//4*5 = 71

var arr = [2,3,4,5];
var arr_2 = [3,4,5,6];
var res = 0;
for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
        res += arr[i] * arr[j];
    } 
}
console.log(res);

//multiplication values of 2 arrays
var res = 0;
for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr_2.length; j++) {
    res += arr[i] * arr_2[j];
    }
}
console.log(res);




var feelsVal = '35';
var lowVal = '32';
var highVal = '40';




if (feelsVal.valueOf() > lowVal.valueOf() && feelsVal.valueOf() < highVal.valueOf()) {
    console.log(`Is feelsLikeTemp between feelsLikeTempLow and feelsLikeTempHigh -> ${lowVal} < ${feelsVal} < ${highVal} - true`);
} else {
    console.log(`Is feelsLikeTemp between feelsLikeTempLow and feelsLikeTempHigh -> ${feelsVal} > ${lowVal} && ${feelsVal} < ${highVal} - false`)
}