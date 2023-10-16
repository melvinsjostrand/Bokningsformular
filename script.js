

let roomType;
let lakeview;
let form; 
let addition;
let customer;

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
    form.elements.telephone.addEventListener("input" , event =>{
        phoneNumber();
    })

    form.elements.zipcode.addEventListener("input" , event =>{
        zipCode();
    })
    form.elements.campaigncode.addEventListener("input" , event =>{
        campaignCode();
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
   // totalCost.innerHTML = (roomCost * nights) + (additionCost()*nights) * campaigncode();
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
    const regexPhone = /^0[0-9-/ ]{6,14}$/;
    console.log(regexPhone);
    customer = document.getElementById("customer");
    let phone = form.elements.telephone.value;
    let ok = regexPhone.exec(phone);
    if(!ok){
        customer.getElementsByTagName("p")[4].getElementsByTagName("span")[1].innerHTML = "Du måste skriva 6 till 14 tecken och börja med 0";
        customer.getElementsByTagName("p")[4].getElementsByTagName("span")[1].parentNode.style.color = "#ff0000"; 
        console.log(ok);
    }else{
        customer.getElementsByTagName("p")[4].getElementsByTagName("span")[1].innerHTML = "";
        console.log(ok);
        return ok;

    }
}

function zipCode(){
    const regexZip = /[0-9]$/;
    console.log(regexZip);
    customer = document.getElementById("customer");
    let zip = form.elements.zipcode.value;
    let ok = regexZip.exec(zip);
    if(!ok){
        customer.getElementsByTagName("p")[2].getElementsByTagName("span")[1].innerHTML = "Ditt postnummer måste får endast innehålla siffror och har 5 siffror";
        customer.getElementsByTagName("p")[2].getElementsByTagName("span")[1].parentNode.style.color = "#ff0000"; 
        console.log(ok);
    }else{
        customer.getElementsByTagName("p")[2].getElementsByTagName("span")[1].innerHTML = "";
        console.log(ok);
        return ok;

    }
}

function campaignCode(){
    const regexCampaign = /[A-Za-z]{3}-[0-9]{2}-[A-Za-z]{1}[0-9]{1}$/;
    console.log(regexCampaign);
    let campaignCost = document.getElementById("campaign");
    let campaign = campaignCost.form.elements.campaigncode.value
    console.log(campaign);
    let ok = regexCampaign.exec(campaign);
    console.log(ok);
    if(!ok){
        campaign.parentNode.style.backgroundColor  = "#008000";
    }else{
        campaign.parentNode.style.backgroundColor  = "#008000";
    }
}