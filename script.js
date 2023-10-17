

let roomType;
let lakeview;
let form; 
let customer;
let campaignCodeValue = 1;

function init(){
    form = document.querySelector("form");
    lakeview = form.elements.addition[2];
    console.log(form);

    for(i = 0; i<form.elements.roomType.length; i++){
        form.elements.roomType[i].addEventListener("click" , event =>{
            checkIfFamilyRoom();
            cost();
        })
    }
    for(i = 0; i<form.elements.addition.length; i++){
        form.elements.addition[i].addEventListener("click" , event =>{
            checkIfFamilyRoom();
            cost();
        })
    }
    form.elements.nights.addEventListener("click" , event =>{
        cost();
    })
    form.elements.campaigncode.addEventListener("keyup" , event =>{
        campaignCode();
        cost();
    })

    form.elements.telephone.addEventListener("blur" , event =>{
        phoneNumber();
    })
    form.elements.zipcode.addEventListener("blur" , event =>{
        zipCode();
    })
    form.elements.city.addEventListener("blur" , event =>{
        locality();
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
    let totalCost = document.getElementById("totalCost");
    for(i = 0; i < form.elements.addition.length; i++){
        if(form.elements.addition[i].checked && !form.elements.addition[i].disabled){
            roomCost+=Number(form.elements.addition[i].value.split(",")[1]);
        }
    }
    totalCost.innerHTML = (roomCost * nights)  * campaignCodeValue;
    console.log("värdet på allt är " + (roomCost * nights)  * campaignCodeValue + "Kr");
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
    const regexPhone = /^0[0-9-/ ]{6,14}$/;
    customer = form.elements.telephone.parentNode.parentNode.getElementsByTagName("span")[1];
    let ok = regexPhone.exec(form.elements.telephone.value);
    if(!ok){
        customer.innerHTML = "Du måste skriva 6 till 14 tecken och börja med 0";
        customer.parentNode.style.color = "#ff0000"; 
    }else{
        customer.innerHTML = "";
    }
}

function zipCode(){
    const regexZip = /[0-9]{5}$/;
    customer = form.elements.zipcode.parentNode.parentNode.getElementsByTagName("span")[1];
    let ok = regexZip.exec(form.elements.zipcode.value);
   
    if(!ok){
        customer.innerHTML = "Ditt postnummer måste får endast innehålla siffror och har 5 siffror";
        customer.parentNode.style.color = "#ff0000"; 
    }else{
        customer.innerHTML = "";
    }
}
//funktioner för validering av input fält   
function campaignCode(){
    const regexCampaign = /[A-Za-z]{3}-[0-9]{2}-[A-Za-z]{1}[0-9]{1}$/; //alk-13-c5, spelar ingen roll om de är stora eller små
    let ok = regexCampaign.exec(form.elements.campaigncode.value);
    if(ok){
        form.elements.campaigncode.style.backgroundColor  = "#99ff99";
        campaignCodeValue = 0.95;
    }else{
        form.elements.campaigncode.style.backgroundColor  = "#ff0000";
        campaignCodeValue = 1;
    }
}

function locality(){
    let text = form.elements.city.value;
    text = text.toUpperCase();
    form.elements.city.value = text;
}

//behöver skapa if(ok){kampanjkod = -5% = *0.95} i calc
//måste fixa så att färgen ändras på rätt plats
