"use strict"

const div = document.createElement('div');
const input = document.createElement('input');
const h2 = document.createElement('h2');
let timeoutID;

document.addEventListener("DOMContentLoaded", () => {
  document.body.append(div);
  div.classList.add("container", "mt-5", "d-flex");
  div.append(input);
  div.append(h2);
  input.classList.add("mr-5");

  input.addEventListener('input', (event) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(updateValue, 300);

    function updateValue() {
      h2.textContent = event.target.value;
    } 
  });
  
});