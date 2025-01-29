// Bootstrap’s CSS and JS Import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// Import converter
import {celsiusToFahrenheit, fahrenheitToCelsius} from './converter';
// DOM Elements
const form = document.getElementById('converterForm');
const tempValue = document.getElementById('tempValue');
const tempType = document.getElementById('tempType');
const result = document.getElementById('result');
const convertButton = document.getElementById('convertButton');

const C2F = 'c2f';


// Add Form Listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const currentTempValue = tempValue.value;
  const conversionType = tempType.value;

  let output;

  if(conversionType === C2F){
    // Logic of conversion
    const fahrenheit = celsiusToFahrenheit(currentTempValue);
    output = `${currentTempValue}°C = ${fahrenheit}°F`
  } else {
    const celsius = fahrenheitToCelsius(currentTempValue);
    output = `${currentTempValue}°F = ${celsius}°C`
  }
  result.textContent = output;
});

