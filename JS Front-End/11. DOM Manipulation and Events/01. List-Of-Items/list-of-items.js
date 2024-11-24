function addItem() {
    
    const InputEl = document.querySelector('newItemText');
    const listElement = document.querySelector('#items');

    if (InputEl.value == '') return;

    const newListItem = document.createElement('li');
    newListItem.textContent = InputEl.value;

    listElement.appendChild(newListItem);

    InputEl.value = '';

    //const buttonEl = document.querySelector('#main input[type="button"')
}
