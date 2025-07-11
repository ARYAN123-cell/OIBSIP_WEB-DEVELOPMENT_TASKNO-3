// function convertTemp() {
//   const temp = parseFloat(document.getElementById("tempInput").value);
//   const fromUnit = document.getElementById("fromUnit").value;
//   const toUnit = document.getElementById("toUnit").value;
//   const result = document.getElementById("result");

//   if (isNaN(temp)) {
//     result.textContent = "❌ Please enter a valid number.";
//     return;
//   }

//   let converted;

//   // Convert to Celsius first
//   let tempC;
//   if (fromUnit === "C") tempC = temp;
//   else if (fromUnit === "F") tempC = (temp - 32) * 5/9;
//   else if (fromUnit === "K") tempC = temp - 273.15;

//   // Convert from Celsius to desired unit
//   if (toUnit === "C") converted = tempC;
//   else if (toUnit === "F") converted = (tempC * 9/5) + 32;
//   else if (toUnit === "K") converted = tempC + 273.15;

//   result.textContent = `✅ Converted Temperature: ${converted.toFixed(2)} °${toUnit}`;
// }
document.getElementById("convertBtn").addEventListener("click", function () {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const resultInput = document.getElementById("result");

  if (isNaN(temp)) {
    resultInput.value = "Invalid input";
    return;
  }

  let celsius;

  // Convert input to Celsius
  if (fromUnit === "C") celsius = temp;
  else if (fromUnit === "F") celsius = (temp - 32) * 5 / 9;
  else if (fromUnit === "K") celsius = temp - 273.15;

  // Show result in Celsius
  resultInput.value = `${celsius.toFixed(4)} °C`;
});
