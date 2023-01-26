const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convertButton = document.querySelector(".convertButton");
const resetButton = document.querySelector(".resetButton");
const changeButton = document.querySelector(".changeButton");
const C = document.querySelector(".C");
const F = document.querySelector(".F");

const swap = () => {
  if(changeButton.value=="C"){
    F.innerHTML = "°F";
    C.innerHTML = "°C";
    document.title = "Converter °C to °F";
    converter.placeholder = "°C";
  }else{
    C.innerHTML = "°F";
    F.innerHTML = "°C";
    document.title = "Converter °F to °C";
    converter.placeholder = "°F";
  }
  // if (C.innerHTML === "°C") {
  //   C.innerHTML = "°F";
  //   F.innerHTML = "°C";
  //   document.title = "Converter °F to °C";
  //   converter.placeholder = "°F";
  // } else {
  //   F.innerHTML = "°F";
  //   C.innerHTML = "°C";
  //   document.title = "Converter °C to °F";
  //   converter.placeholder = "°C";
  // }
};

const reset = () => {
  console.log("HEllo");
  converter.value = "";
  result.innerHTML = "";
  result.classList="result"
};

const convert = () => {
  result.classList="p-2 m-3"
  if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
    result.style.color = "yellow";
    if (C.innerHTML === "°C") {
      let value = converter.value * 1.8 + 32;
      result.innerHTML = `${converter.value}°C to ${value.toFixed(2)}°F`;
    } else {
      let value = (converter.value - 32) / 1.8;
      result.innerHTML = `${converter.value}°F to ${value.toFixed(2)}°C`;
    }
  } else if (converter.value == "") {
    result.style.color = "white";
    result.innerHTML = "Write correct value!";
  } else {
    result.style.color = "white";
    result.innerHTML = "Wrong value!";
  }
};

changeButton.addEventListener("click", swap);
resetButton.addEventListener("click", reset);
convertButton.addEventListener("click", convert);
