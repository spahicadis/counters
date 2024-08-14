//import { nanoid } from 'nanoid'
//const uuidv4 = require("uuid/v4");
//Small break, because Im learning some others stuff online


//DOM
const initalCountValue = document.querySelector('.inital-count-js');
const maxCountValue = document.querySelector('.max-count-js');
const addCounterButton = document.querySelector('.button-create-js');
const createdCountersDiv = document.querySelector('.createdCounters');

//STATEs
let initalCount = null;
let maxCount = null;
let id = 0;
const counters = [];


//BINDING
initalCountValue.addEventListener('input', function(e) {
  initalCount = parseInt(e.target.value);
  console.log(initalCount);
})

maxCountValue.addEventListener('input', function(e) {
  maxCount = parseInt(e.target.value);
  console.log(maxCount);
})

addCounterButton.addEventListener('click', function(){
  const newCounter = {'init':initalCount,
    'max':maxCount,
    'id':id++
  }
  counters.push(newCounter);
  console.log(newCounter, counters);
  initalCount = 0;
  maxCount = 0;
  initalCountValue.value = '';
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


buttonDecrement.addEventListener('click', function() {
initalCount = newCounter.init;
maxCount = newCounter.max
console.log(initalCount, maxCount);
newCounter.init --;
counterInit.innerHTML =`${newCounter.init}`;
console.log(initalCount);



})

buttonIncrement.addEventListener('click', function() {
initalCount = newCounter.init;
maxCount = newCounter.max
console.log(initalCount, maxCount);
newCounter.init ++;
counterInit.innerHTML =`${newCounter.init}`;
console.log(initalCount);
if(initalCount==maxCount) {
  alert('stop');
}


})
});




















