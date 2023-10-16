

let roomType;
let lakeview;
let form; 
let addition;
function init(){
    form = document.querySelector("form");
    let formCost = [form.elements.roomType && 
                    form.elements.addition && 
                    form.elements.nights && 
                    form.elements.campaigncode];
    lakeview = form.elements.addition[2];

    for(i = 0; i<form.elements.roomType.length; i++){
        form.elements.roomType[i].addEventListener("click" , event =>{
            checkIfFamilyRoom();
        })
    }
    for(i = 0; i<formCost.length; i++){
        formCost[i].addEventListener("click" ,event => {
            cost();
        });
    }
    form.elements.telephone.addEventListener("click" , event =>{
        phoneNumber();
    })

    checkIfFamilyRoom();

}
window.onload = init;


function checkIfFamilyRoom(){
    let persons = form.elements.persons;
    if (form.elements.roomType[2].checked === true) {
        lakeview.disabled = true;
        lakeview.parentNode.style.color = "#000";
        persons.disabled = false;
    }else{
        lakeview.disabled = false;
        persons.disabled = true;
        persons.parentNode.style.color = "#000";
    }
}



function cost(){
    let nights = Number(form.elements.nights.value);
    let roomCost = Number(form.elements.roomType.value.split(",")[1]);
    console.log(roomCost);
    let totalCost = document.getElementById("totalCost");
    totalCost.innerHTML = (roomCost * nights);
    console.log(roomCost * nights);
}
//skapa en till if else sats för att vilka som är i checkade
function additionCost(){
    let AdditionCost = Number(form.elements.addition.value);
    if(form.elements.addition[0].checked == true){
        AdditionCost[0]
    }else if(form.elements.addition[1].checked == true){
        AdditionCost[1]
    }else if(form.elements.addition[2].checked == true){
        AdditionCost[2]
    }
}



function phoneNumber(){
    const regex = /^0[0-9-/ ]{6,14}$/;
    let customer = getElementById("customer");
    let phone = Number(form.elements.telephone.value);
        customer.getElementByTagName("p")[4].getElementByTagName("span")[1];
    let ok = regex.exec(phone);
    if(!ok){
        customer.getElementByTagName("p")[4].getElementByTagName("span")[1].innerHTML = "det är fel";
        customer.getElementByTagName("p")[4].getElementByTagName("span")[1].parentNode.style.color = "#ff0000"; 
    }else{
        return ok;
    }
}