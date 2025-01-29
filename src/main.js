// Bootstrap’s CSS and JS Import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// DOM Elements
const form = document.getElementById('converterForm');
const tempValue = document.getElementById('tempValue');
const conversionType = document.getElementById('conversionType');
const convertButton = document.getElementById('convertButton');
const resultArea = document.getElementById('resultArea');
const themeSwitcher = document.getElementById('themeSwitcher');

const C2F = 'c2f';
const F2C = 'f2c';

// Add Form Listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const currentTempValue = tempValue.value;
  const currentConversionType = conversionType.value;

  let output;

  if (currentConversionType === 'C2F') {
    // Logic of conversion
    output = (currentTempValue * 1.8) + 32;
  } else {
    output = (currentTempValue - 32) / 1.8;)