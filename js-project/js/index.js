"use strict"

let createDiv = document.querySelector('.note-create');
let mainDiv = document.querySelector('.note-area')

createDiv.addEventListener('click', ()=>{
    let textArea = document.createElement("p");
    textArea.classList.add("text");
    textArea.contentEditable = "true";
    let trashIcon = document.createElement('img');
    trashIcon.classList.add("trash-icon");
    trashIcon.src = 'image/trash.svg'
    mainDiv.appendChild(textArea).appendChild(trashIcon);

    saveData()
});

mainDiv.addEventListener("click", (e)=>{
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
    }
    saveData()
}, false)

function saveData(){
    
    localStorage.setItem("data", mainDiv.innerHTML)
}
function showData(){
    mainDiv.innerHTML= localStorage.getItem("data")
}
showData()