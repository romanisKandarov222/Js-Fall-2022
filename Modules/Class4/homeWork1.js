/**
 * Homework - 1
 * 
 * Due date : Friday (Oct-7) eod
 * 
 * Convert temperature values into different units:
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Extra: Try to find how to get only 2-digits after the decimal point
 * 
 */

//Conversion Fahrenheit to Celsius
var fahrenheitTemp = 95;
var fahrenheitToCelsius = (fahrenheitTemp - 32) * 5/9;
var roundedValue = fahrenheitToCelsius.toFixed(2);
console.log(`\n${fahrenheitTemp}°F equals to ${roundedValue}°C`);

//Conversion Fahrenheit to Kelvin
var fahrenheitTemp = 69;
var fahrenheitToKelvin = (fahrenheitTemp - 32) * 5/9 + 273.15;
var roundedValue = Math.round(fahrenheitToKelvin * 100) / 100;
console.log(`\n${fahrenheitTemp}°F equals to ${roundedValue}°K`);




//Conversion Celsius to Kelvin
var celciusTemp = 20;
var celciusToKelvin = celciusTemp + 273.15;
var roundedValue = celciusToKelvin.toFixed(2);
console.log(`\n${celciusTemp}°C equals to ${roundedValue}°K`);

//Conversion Celsius to Fahrenheit
var celciusTemp = 13;
var celsiusToFahrenheit = celciusTemp * 9/5 + 32;
var roundedValue = celsiusToFahrenheit.toFixed(2);
console.log(`\n${celciusTemp}°C equals to ${roundedValue}°F`);




//Conversion Kelvin to Fahrenheit
var kelvinTemp = 310;
var kelvinToFahrenheit = (kelvinTemp - 273.15) * 9/5 + 32;
var roundedValue = kelvinToFahrenheit.toFixed(2);
console.log(`\n${kelvinTemp}°K equals to ${roundedValue}°F`);

//Conversion Kelvin to Celsius
var kelvinTemp = 298;
var kelvinToCelsius = kelvinTemp - 273.15;
var roundedValue = Math.round(kelvinToCelsius * 100) / 100;
console.log(`\n${kelvinTemp}°K equals to ${roundedValue}°C`);




