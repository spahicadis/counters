//DOM
const initalCountValue = document.querySelector('.inital-count-js');
const maxCountValue = document.querySelector('.max-count-js');
const addCounterButton = document.querySelector('.button-create-js');
const createdCountersDiv = document.querySelector('.createdCounters');

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
  counters.push({'init':initalCount,
    'max':maxCount
  });
  console.log(counters);
});


