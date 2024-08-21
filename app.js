//DOM
const initialCounterValue = document.querySelector('.initial-count-js');
const maxCounterValue = document.querySelector('.max-count-js');
const buttonAddCounter = document.querySelector('.button-create-js');


//STATEs
let initialValue;
let maxValue;
let counterID = -1;
const counters = [];
let trackNum = 0;


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
const counterDiv = document.createElement("div");
const buttonDecrement = document.createElement("button");
const counterCounting = document.createElement("span");
const buttonIncrement = document.createElement("button");
const counterRange = document.createElement("span");
const displayCounterInfo = document.createElement("span");
const counterContainer = document.querySelector(".createdCounters");
counterDiv.classList.add("counterDiv")
displayCounterInfo.classList.add("infoButton")
buttonDecrement.innerText =  `➖`
buttonIncrement.innerText = `➕`
counterCounting.innerText = `${counters[trackNum].initial}`
counterRange.innerText = `Min: ${counters[trackNum].initial}, Max: ${counters[trackNum].max} `
displayCounterInfo.innerHTML = `ℹ️`
counterDiv.appendChild(buttonDecrement);
counterDiv.appendChild(counterCounting);
counterDiv.appendChild(buttonIncrement);
counterDiv.appendChild(counterRange);
counterDiv.appendChild(displayCounterInfo);
counterContainer.appendChild(counterDiv)
trackNum++

decrement(buttonDecrement, counterCounting, counterID);
increment(buttonIncrement, counterCounting, counterID);
getCounterInfo(displayCounterInfo, counterID);


}


buttonAddCounter.addEventListener('click', function() {
  const counter = {
    id: counterID++,
    initial: initialValue,
    max: maxValue,
    initalBorder: initialValue,
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

function decrement(btnDecrement, counterCounting, id) {
    btnDecrement.addEventListener('click', function() {
      if(counters[id].initial === counters[id].initalBorder ) {
        console.log("vrijednost je dosegla granicu")
        return
      }
    initialValue = counters[id].initial;
    maxValue = counters[id].max;
    --counters[id].initial;
    counterCounting.innerText = counters[id].initial
    if(counters[id].initial === counters[id].initalBorder) {
      console.log("vrijednost je dosegla granicu")
      return
    }
  })
}

function increment(btnIncrement, counterCounting, id) {
   btnIncrement.addEventListener('click', function() {
    if(counters[id].initial === counters[id].max ) {
      console.log("vrijednost je dosegla granicu")
      return
    }
  initialValue = counters[id].initial;
  maxValue = counters[id].max;
  ++counters[id].initial;
  counterCounting.innerText = counters[id].initial
  if(counters[id].initial === counters[id].max) {
    console.log("vrijednost je dosegla granicu")
    return
  }
})
}

function getCounterInfo(counterInfo, id) {
counterInfo.addEventListener('click', function() {
  let displayInitialBorder = counters[id].initial;
  let displayMaxBorder = counters[id].max;
  let displayId = counters[id].id
  Toastify({
    text: "Button info: \n" + "Inital border: " + displayInitialBorder + "\n" + "Max border: " + displayMaxBorder + "\n" + "displayID: " + displayId,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
})
}


