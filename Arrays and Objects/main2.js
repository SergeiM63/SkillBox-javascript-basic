'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const optionArray = [
  	{value: 'Значение 1', label: 'Заголовок 1'},
	  {value: 'Значение 2', label: 'Заголовок 2'},
	  	{value: 'Значение 3', label: 'Заголовок 3'},
	  		{label: 'Заголовок 4'},
  ];
//     <-
  function addNewSelect(array, value = array[0].value) {
  	const newSelect = document.createElement('select');
	//     <-
	  array.map(option => {
		const newOption = document.createElement('option');
		if(option.value === undefined) {
			option.value = value;
		}
		newOption.value = option.value;
		newOption.label = option.label;
		newSelect.add(newOption, null);
	});
  	//     <-
  	return body.appendChild(newSelect);
  }
//     <-
  addNewSelect(optionArray);
});
