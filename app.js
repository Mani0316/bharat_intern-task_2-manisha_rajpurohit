//srcipt to convert the temperature
const degree = document.querySelector("#degree");
const celsiusField = document.querySelector("#celsius");
const tempType = document.querySelector("#temp-type");
const convertBtn = document.querySelector("#convert-btn");
//window
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";

});
convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertTocelsius();
});
function convertTocelsius() {
    let inputValue = degree.value;
    if(tempType.value === "kelvin") {
        const kelvinToCelsius = inputValue -273.15;
        celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;
        c`;
    }
    else if(tempType.value === "fahrenheit") {
        const fahrenheitToCelsius = (inputValue -32) *(5/9);
        celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;
        c`;
    }
}