
var ToDoList = [];

var form = document.getElementById('MyToDoList');
form.addEventListener('submit', function() {
  event.preventDefault();

  var input = document.getElementById('Myinput').value;
   

  ToDoList.push(input);
  document.getElementById('myUL').innerHTML = ToDoList;

  
  
});