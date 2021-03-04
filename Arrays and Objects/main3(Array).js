'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const primitiveArray = [1, 2, "Три", "Четыре"];
  let optionArray = [];
//     <-
  function getOptionArray(array) {
    array.map(item => {
      let newObject = {};
      newObject.value = item;
      newObject.label = newObject.value;
      optionArray.push(newObject);
    });
    //     <-
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
//     <-
  getOptionArray(primitiveArray);
  addNewSelect(optionArray);
});