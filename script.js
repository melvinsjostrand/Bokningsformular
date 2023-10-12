

let roomType;
let sjöutsikt;
let form; 
function init(){
    form = document.querySelector("form");
    sjöutsikt = form.elements.addition[2];
    
    for(i = 0; i<form.elements.roomType.length; i++){
        form.elements.roomType[i].addEventListener("click" , event =>{
            checkIfFamilyRoom(); 
            cost();
        })
    }


    checkIfFamilyRoom();

}
window.onload = init;


function checkIfFamilyRoom(){
    let persons = form.elements.persons;
    if (form.elements.roomType[2].checked === true) {
        sjöutsikt.disabled = true;
        sjöutsikt.parentNode.style.color = "#000";
        persons.disabled = false;
    }else{
        sjöutsikt.disabled = false;
        persons.disabled = true;
        persons.parentNode.style.color = "#000";
    }
}



function cost(){
    let nights = Number(form.elements.nights.value);
    let roomCost = Number(form.elements.roomType.value.split(",")[1]);
    let additionCost = Number(form.elements.addition.value.split(",")[1])
    if(additionCost !==NaN){
        Number(form.elements.addition.value.split(",")[1]);
    }else{
        additionCost = ("0");
    }
    console.log(roomCost);
    console.log(additionCost);
    let totalCost = document.getElementById("totalCost");
    totalCost.innerHTML = (roomCost * nights);
    console.log(roomCost * nights);
}
