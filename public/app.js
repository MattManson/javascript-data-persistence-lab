var init = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todos')) || [];
  populate(todosArray);
}

var populate = function (todos) {
  // this function needs to:
  console.log(todos);
  todos.forEach(function(element){
    addItem(element);
  })
  // - loop through the array of todos, invoking addItem() for each todo item
}

var addItem = function (item) {
  var ul = document.querySelector('#todo-list');
  var li = document.createElement('li');
  li.innerHTML = item
  ul.appendChild(li);
  // this function needs to:
  // - create an li element containing the string 'item'
  // - append the li to the "todo-list" ul
}

var handleButtonClick = function () {
  // this function needs to:
  var inputBox = document.querySelector('#new-item');
  var value = inputBox.value;
  // - get hold of the input box's value
  addItem(value);
  save(value)

  // - append it to the "todo-list" ul by invoking addItem()
  // - add it to local storage by invoking save()
}

var save = function (newItem) {
  // this function needs to:
  console.log(newItem);
  var storedArray = JSON.parse(localStorage.getItem('todos')) || [];
  console.log(storedArray)

  storedArray.push(newItem);

  // - get the data back from local storage and parse to an array
  // - add the newItem to the array
  var jsonArray = JSON.stringify(storedArray);
  localStorage.setItem('todos', jsonArray);
  // - stringify the updated array
  // - save it back to localstoage
}

window.addEventListener('load', init);
