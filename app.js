//DOM
const initalCountValue = document.querySelector('.inital-count-js');
const maxCountValue = document.querySelector('.max-count-js');
const addCounterButton = document.querySelector('.button-create-js');
const createdCountersDiv = document.querySelector('.createdCounters')

//STATEs
let initalCount = null;
let maxCount = null;
const counters = []


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
    'max':maxCount
  }
  counters.push(newCounter);
  initalCount = 0;
  maxCount = 0;
  initalCountValue.value = '';
  maxCountValue.value = '';
  
  const countersBorder = document.createElement("p");
  const counterInit = document.createElement("p");
  const buttonIncrement = document.createElement("button");
  const buttonDecrement = document.createElement("button");
  buttonDecrement.innerHTML = `Minus`;
  counterInit.innerHTML = newCounter.init
  buttonIncrement.innerHTML = `Plus`;
  countersBorder.innerHTML = `Init:${newCounter.init},  Max:${newCounter.max} <br>`;
  createdCountersDiv.appendChild(buttonDecrement);
  createdCountersDiv.appendChild(counterInit);
  createdCountersDiv.appendChild(buttonIncrement);
  createdCountersDiv.appendChild(countersBorder);

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

buttonDecrement.addEventListener('click', function() {
  initalCount = newCounter.init;
  maxCount = newCounter.max;

  
  
})

buttonIncrement.addEventListener('click', function() {
  initalCount ++
  counters.forEach((element) => {
    element.init = initalCount;
    maxCount = element.max;
    console.log(initalCount, maxCount);
    console.log(initalCount);
    
    
  })
  
  
})

  
});










