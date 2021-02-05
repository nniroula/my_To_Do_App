
let itemsAdded = document.getElementById("listOfItems");
let  typedItem = document.getElementById("items");
let inputToForm = document.getElementById("formInput");

inputToForm.addEventListener('submit', function(e){
     e.preventDefault();
   //alert("You have submitted"); To check if this function does what it is supposed to do
    let elementCreated = document.createElement("li");
    itemsAdded.append(elementCreated);
    elementCreated.innerText = typedItem.value;
    typedItem.value = '';
    // do single click on an item to cross out that item
    elementCreated.addEventListener('click', function(){
        elementCreated.style.textDecoration = 'line-through';
    })
    // do double click on an item to remove that item
    elementCreated.addEventListener('dblclick', function(){
        itemsAdded.removeChild(elementCreated);
    })
})