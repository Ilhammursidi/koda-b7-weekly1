function konversiSuhu(celcius,fahrenheit) {
    const celciusToFahrenheit = (celcius*9/5)+32 
    const fahrenheitToCelcius = (fahrenheit-32)*5/9

    console.log(celcius + " derajat celcius = " +celciusToFahrenheit +" derajat fahrenheit")
    console.log(fahrenheit + " derajat fahrenheit = " +fahrenheitToCelcius+" derajat celcius")
}

konversiSuhu(25,82);
console.log('')
konversiSuhu(27,100);