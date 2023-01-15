let counter = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", decrementCounter);

incrementBtn.addEventListener("click", incrementCounter);

function decrementCounter() {
  counter -= 1;
  valueEl.textContent = counter;
}

function incrementCounter() {
  counter += 1;
  valueEl.textContent = counter;
}
