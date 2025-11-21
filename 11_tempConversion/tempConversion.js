const convertToCelsius = function(tempF) {
  const convertedTemp = (tempF - 32) * 5 / 9;
  return Math.round(convertedTemp * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
  const convertedTemp = tempC * 1.8 + 32;
  return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
