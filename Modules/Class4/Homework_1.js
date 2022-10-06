



//Celsius to Kelvin
var celciusTemp = 20;
var celciusToKelvin = celciusTemp + 273.15;
var roundedValue = celciusToKelvin.toFixed(2);
console.log(`\n${celciusTemp} Celsius to Kelvin = ${roundedValue}`);

//Celsius to Fahrenheit
var celciusTemp = 13;
var celsiusToFahrenheit = celciusTemp * 9/5 + 32;
var roundedValue = celsiusToFahrenheit.toFixed(2);
console.log(`\n${celciusTemp} Celsius to Fahrenheit = ${roundedValue}`);




//Kelvin to Fahrenheit
var kelvinTemp = 310;
var kelvinToFahrenheit = (kelvinTemp - 273.15) * 9/5 + 32;
var roundedValue = kelvinToFahrenheit.toFixed(2);
console.log(`\n${kelvinTemp} Kelvin to Fahrenheit = ${roundedValue}`);

//Kelvin to Celsius
var kelvinTemp = 298;
var kelvinToCelsius = kelvinTemp - 273.15;
var roundedValue = Math.round(kelvinToCelsius * 100) / 100;
console.log(`\n${kelvinTemp} Kelvin to Celsius = ${roundedValue}`);




//Fahrenheit to Celsius
var fahrenheitTemp = 95;
var fahrenheitToCelsius = (fahrenheitTemp - 32) * 5/9;
var roundedValue = fahrenheitToCelsius.toFixed(2);
console.log(`\n${fahrenheitTemp} Fahrenheit to Celsius = ${roundedValue}`);


//Fahrenheit to Kelvin
var fahrenheitTemp = 69;
var fahrenheitToKelvin = (fahrenheitTemp - 32) * 5/9 + 273.15;
var roundedValue = Math.round(fahrenheitToKelvin * 100) / 100;
console.log(`\n${fahrenheitTemp} Fahrenheit to Kelvin = ${roundedValue}`);
