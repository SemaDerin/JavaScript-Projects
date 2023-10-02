const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes= document.querySelectorAll(".input-box");

// Sayfa yüklendiğinde notları geri yükle
window.addEventListener("load", () => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
        notes = document.querySelectorAll(".input-box");
    }
});


function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("P");
    let img = document.createElement("IMG");
    inputBox.className= "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
        
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup= function(){
                updateStorage();
                
            }
        })
    }


})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
            event.preventDefault();
        
    }
})