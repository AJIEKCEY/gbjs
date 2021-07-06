const inputFahrenheit = document.getElementById('fahrenheitTemperature');
const inputCelsius = document.getElementById('celsiusTemperature');


function convertToFahrenheit(temperature) {
    return 9 / 5 * temperature + 32;
}

function convertToCelsius(temperature) {
    return (temperature - 32) * 5 / 9;
}

function setValueCelsius(e){
    const temperatureNumber = Number.parseFloat(e.target.value);
    const convertedTemperature = convertToCelsius(temperatureNumber);
    inputCelsius.value = convertedTemperature.toFixed(2);
}

function setValueFahrenheit(e){
    const temperatureNumber = Number.parseFloat(e.target.value);
    const convertedTemperature = convertToFahrenheit(temperatureNumber);
    inputFahrenheit.value = convertedTemperature.toFixed(2);
}

inputFahrenheit.addEventListener('input',setValueCelsius);
inputCelsius.addEventListener('input',setValueFahrenheit);


/* Второе задание */
const NAME = 'Василий';
let admin;
admin = NAME;

console.info(`Здравствуй ${ admin }`);
