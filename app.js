//DOM
const initialCounterValue = document.querySelector('.initial-count-js');
const maxCounterValue = document.querySelector('.max-count-js');
const buttonAddCounter = document.querySelector('.button-create-js');


//STATEs
let initialValue;
let maxValue;
let counterID = 0;
const counters = [];


//BINDING
initialCounterValue.addEventListener('input', function(e) {
  initialValue = parseInt(e.target.value)
  console.log(initialValue)
})

maxCounterValue.addEventListener('input', function(e) {
  maxValue = parseInt(e.target.value)
  console.log(maxValue)
})

function renderCounters() {
const buttonDecrement = document.createElement("button");
const buttonIncrement = document.createElement("button");
const counterCounting = document.createElement("span");
const counterRange = document.createElement("span");
const displayCounterInfo = document.createElement("span");
const counterContainer = document.querySelector(".createdCounters");
console.log(counters[counterID]);


}

buttonAddCounter.addEventListener('click', function() {
  const counter = {
    id: counterID++,
    initial: initialValue,
    max: maxValue
  }
  counters.push(counter);
  console.log(counters)
  initialValue = 0;
  maxValue = 0;
  console.log(initialValue, maxValue);
  initialCounterValue.value = "";
  maxCounterValue.value = "";
  renderCounters()
})

