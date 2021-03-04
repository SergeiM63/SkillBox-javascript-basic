'use strict'

const body = document.body;
const primitiveArray = [1, 2, "Три", "Четыре"];
const myObj = {name: 'Сергей', age: 30, job: 'technical specialist', status: 'married'}
let optionArray = new Array;
//     <-
document.addEventListener('DOMContentLoaded', () => {
  function getOptionArray(array) {
    if(Array.isArray(array)) getObjectOfArray(array);
    if(!Array.isArray(array) && typeof array === 'object') {
      getArrayOfObject(array);
    }
    return optionArray;
  }
  //     <-
  getOptionArray(primitiveArray);
  getOptionArray(myObj);
  addNewSelect(optionArray);
});
//     <-
function getArrayOfObject(array) {
  array = Object
      .entries(myObj)
      .map(item =>  {
        const newObject = new Object;
        newObject.value = item[0];
        newObject.label = item[1];
        optionArray.push(newObject);
      });
      return optionArray;
}
//     <-
function getObjectOfArray(array) {
  array.map(item => {
    const newObject = new Object;
    newObject.value = item;
    newObject.label = newObject.value;
    optionArray.push(newObject);
  });
  return optionArray;
}
//     <-
function addNewSelect(array, value = array[0].value) {
  const newSelect = document.createElement('select');
//     <-
  array.map(option => {
  const newOption = document.createElement('option');
  option.value === undefined? option.value = value : false;
  newOption.value = option.value;
  newOption.label = option.label;
  newSelect.add(newOption, null);
});
  //     <-
  return body.appendChild(newSelect);
}
