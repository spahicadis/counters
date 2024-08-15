//import { nanoid } from 'nanoid'
//const uuidv4 = require("uuid/v4");



//DOM
const initialCountValue = document.querySelector('.initial-count-js');
const maxCountValue = document.querySelector('.max-count-js');
const addCounterButton = document.querySelector('.button-create-js');
const createdCountersDiv = document.querySelector('.createdCounters');

//STATEs
let initialCount = null;
let maxCount = null;
let id = 1;
const counters = [];


//BINDING
initialCountValue.addEventListener('input', function(e) {
  initialCount = parseInt(e.target.value);
  console.log(initialCount);
})

maxCountValue.addEventListener('input', function(e) {
  maxCount = parseInt(e.target.value);
  console.log(maxCount);
})

//increment

addCounterButton.addEventListener('click', function(){
  const newCounter = {'init':initialCount,
    'max':maxCount,
    'id':id++,
    'initBorder':initialCount,
    'maxBorder':maxCount
  }
counters.push(newCounter);
console.log(newCounter, counters);
initialCount = 0;
maxCount = 0;
initialCountValue.value = '';
maxCountValue.value = '';
const countersBorder = document.createElement("p");
const counterInit = document.createElement("p");
const buttonIncrement = document.createElement("button");
const buttonDecrement = document.createElement("button");
const info = document.createElement("span");
buttonDecrement.innerHTML = `Minus`;
counterInit.innerHTML = newCounter.init
buttonIncrement.innerHTML = `Plus`;
countersBorder.innerHTML = `Init:${newCounter.init},  Max:${newCounter.max}`;
info.innerHTML = `ℹ️ <br>`
createdCountersDiv.appendChild(buttonDecrement);
createdCountersDiv.appendChild(counterInit);
createdCountersDiv.appendChild(buttonIncrement);
createdCountersDiv.appendChild(countersBorder);
createdCountersDiv.appendChild(info);
buttonDecrement.style.height = ('50px');
buttonDecrement.style.width = ('50px');
buttonDecrement.style.display = ('inline');
buttonIncrement.style.height = ('50px');
buttonIncrement.style.width = ('50px');
buttonIncrement.style.display = ('inline');
counterInit.style.display = ('inline');
countersBorder.style.display = ('inline');
countersBorder.style.margin = "0px"
buttonDecrement.style.margin = "10px 10px 10px 10px"
buttonIncrement.style.margin = "10px 10px 10px 10px"
counterInit.style.margin = "10px 10px 10px 10px"
info.style.margin = "10px 10px 10px 10px"

info.addEventListener('click', function() {
  console.log(counters);
  console.log(newCounter);
  console.log(newCounter.id, newCounter.init, newCounter.max);
})

function decrement() {
  initialCount = newCounter.init-1;
  maxCount = newCounter.max;
  console.log(initialCount, maxCount);
  --newCounter.init;
  counterInit.innerHTML = `${newCounter.init}`;
  console.log(initialCount, maxCount);
  console.log(newCounter.initBorder, newCounter.maxBorder);
  if(initialCount == newCounter.initBorder) {
    buttonDecrement.removeEventListener('click', decrement);
  }
}

function increment() {
  initialCount = newCounter.init+1;
  maxCount = newCounter.max;
  console.log(initialCount, maxCount);
  ++newCounter.init;
  counterInit.innerHTML = `${newCounter.init}`;
  console.log(initialCount);
  console.log(newCounter.initBorder, newCounter.maxBorder);
  if(initialCount == newCounter.maxBorder) {
    buttonIncrement.removeEventListener('click', increment);
  }
}

buttonDecrement.addEventListener('click', decrement)
buttonIncrement.addEventListener('click', increment)

});




















