"use strict";

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item =  document.getElementById("li")

function inputLength(){
    return input.value.length;
}
function  listLength(){
return item.length;
}

function createListELement(){
    var li =  document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    input.value = " ";


function crossOut(){
    li.createlist.toggle("done")
   
}
li.addEventListener("click", crossOut);

// Delete Button

var dBtn = document.createElement("button");
dBtn.appendChild(document.createTextNode("X"));
li.appendChild(dBtn);
dBtn.addEventListener("click", deleteListItem);

function deleteListItem(){
    li.classList.add("delete")
}
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListELement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.which ===13){
        createListELement();

    }
}
enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress)