// Deklarera globala variabler
let form;
let totalCost;
let customer;
let campaignCodeValue = 1;

// Funktion som körs när sidan laddas
function init() {
    // Hitta formuläret och lakeview-elementet i DOM
    form = document.querySelector("form");
    totalCost = document.getElementById("totalCost");
    totalCost.innerHTML = "600";

    // Lägg till händelselyssnare för klick på rumstyp och tillägg
    for (let i = 0; i < form.elements.roomType.length; i++) {
        form.elements.roomType[i].addEventListener("click", (event) => {
            checkIfFamilyRoom();
            cost();
        });
    }
    for (let i = 0; i < form.elements.addition.length; i++) {
        form.elements.addition[i].addEventListener("click", (event) => {
            checkIfFamilyRoom();
            cost();
        });
    }

    // Lägg till händelselyssnare för antal nätter och kampanjkod
    form.elements.nights.addEventListener("click", (event) => {
        cost();
    });
    form.elements.campaigncode.addEventListener("keyup", (event) => {
        campaignCode();
        cost();
    });

    // Lägg till händelselyssnare för telefonnummer, postnummer och stad
    form.elements.telephone.addEventListener("blur", (event) => {
        phoneNumber();
    });
    form.elements.zipcode.addEventListener("blur", (event) => {
        zipCode();
    });
    form.elements.city.addEventListener("blur", (event) => {
        locality();
    });

    // Kontrollera om det är en familjerum
    checkIfFamilyRoom();
}

// Kör init-funktionen när sidan laddas
window.onload = init;

// Funktion för att kontrollera om det är ett familjerum
function checkIfFamilyRoom() {
    if (form.elements.roomType[2].checked === true) {
        form.elements.addition[2].disabled = true;
        form.elements.addition[2].parentNode.style.color = "#000";
        form.elements.persons.disabled = false;
    } else {
        form.elements.addition[2].disabled = false;
        form.elements.persons.disabled = true;
        form.elements.persons.parentNode.style.color = "#000";
    }
}

// Funktion för att beräkna kostnaden
function cost() {
    let roomCost = Number(form.elements.roomType.value.split(",")[1]);
    totalCost = document.getElementById("totalCost");
    for (let i = 0; i < form.elements.addition.length; i++) {
        if (form.elements.addition[i].checked && !form.elements.addition[i].disabled) {
            roomCost += Number(form.elements.addition[i].value.split(",")[1]);
        }
    }
    totalCost.innerHTML = (roomCost * Number(form.elements.nights.value)) * campaignCodeValue;
    console.log("värdet på allt är " + (roomCost * Number(form.elements.nights.value)) * campaignCodeValue + "Kr");
}

// Funktion för att validera telefonnummer
function phoneNumber() {
    const regexPhone = /^0[0-9-/ ]{6,14}$/;
    if (!regexPhone.exec(form.elements.telephone.value)) {
        form.elements.telephone.parentNode.parentNode.getElementsByTagName("span")[1].innerHTML = "Du måste skriva 6 till 14 tecken och börja med 0";
        form.elements.telephone.parentNode.parentNode.getElementsByTagName("span")[1].parentNode.style.color = "#ff0000";
    } else {
        customer.innerHTML = "";
    }
}

// Funktion för att validera postnummer
function zipCode() {
    const regexZip = /[0-9]{5}$/; 
    if (!regexZip.exec(form.elements.zipcode.value)) {
        form.elements.zipcode.parentNode.parentNode.getElementsByTagName("span")[1].innerHTML = "Ditt postnummer måste får endast innehålla siffror och ha 5 siffror";
        form.elements.zipcode.parentNode.parentNode.getElementsByTagName("span")[1].parentNode.style.color = "#ff0000";
    } else {
        form.elements.zipcode.parentNode.parentNode.getElementsByTagName("span")[1].innerHTML = "";
    }
}

// Funktion för att hantera kampanjkod
function campaignCode() {
    const regexCampaign = /[A-Za-z]{3}-[0-9]{2}-[A-Za-z]{1}[0-9]{1}$/;
    if (regexCampaign.exec(form.elements.campaigncode.value)) {
        form.elements.campaigncode.style.backgroundColor = "#99ff99";
        campaignCodeValue = 0.95;
    } else {
        form.elements.campaigncode.style.backgroundColor = "#ff0000";
    }
}

// Funktion för att omvandla stad till stora bokstäver
function locality() {
    let text = form.elements.city.value;
    text = text.toUpperCase();
    form.elements.city.value = text;
}
