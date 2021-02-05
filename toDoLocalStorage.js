/*          Part 2
Now that you have a functioning todo app, save your todos in localStorage! Make sure that 
when the page refreshes, the todos on the page remain there.
*/

let itemsAdded = document.getElementById("listOfItems");
let  typedItem = document.getElementById("items");
let inputToForm = document.getElementById("formInput");

let itemsStored = [] || JSON.parse(localStorage.getItem("todos"));
inputToForm.addEventListener('submit', function(e){
    e.preventDefault();
    //alert("You have submitted"); To check if this function does what it is supposed to do
    let elementCreated = document.createElement("li");
    itemsAdded.append(elementCreated);
    elementCreated.innerText = typedItem.value;
    typedItem.value = '';
   
    // save in local storage
    itemsStored.push({item: elementCreated.innerText});
    localStorage.setItem("todos", JSON.stringify(itemsStored));

    //get items from local storage
    JSON.parse(localStorage.getItem("todos"));

   // do single click on an item to cross out that item
   elementCreated.addEventListener('click', function(){
       elementCreated.style.textDecoration = 'line-through';
   });
   // do double click on an item to remove that item
   elementCreated.addEventListener('dblclick', function(){
       itemsAdded.removeChild(elementCreated);
   });
})
