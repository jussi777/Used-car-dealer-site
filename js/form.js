const carName = document.getElementById("name");
const carPrice = document.getElementById("price");
const btnAdd = document.querySelectorAll("#add");
const btnRemove = document.querySelectorAll("#remove");
const additionPrice = document.querySelectorAll("#additionPrice");
const additionName = document.querySelectorAll("#additionName");
const divAccessories = document.querySelector("#choosenAccessories");
const badge = document.querySelectorAll(".badge");
const buy = document.getElementById("buy");
const surname = document.getElementById("name-surname");
const place = document.getElementById("receive-place");
const errorName = document.getElementById("error-message-name");
const errorPlace = document.getElementById("error-message-place");
const date = document.getElementById("delivery-date");
const back = document.getElementById("return");

// show car brand and price

const name = window.localStorage.getItem("myCarName");
let price = window.localStorage.getItem("myCarPrice");

let totalPrice = Number(price);

carName.innerHTML = `Wybrane auto: ${name}`;
carPrice.innerHTML = `Cena całkowita: ${price} PLN`;
window.localStorage.setItem("totalPrice", totalPrice);

// add addition

function addAddition() {
  for (let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener("click", function (e) {
      const thisAdditionPrice = additionPrice[i].innerHTML;
      if (!badge[i].classList.contains("active")) {
        totalPrice += Number(thisAdditionPrice);
      }
      badge[i].classList.add("active");
      carPrice.innerHTML = `Cena całkowita: ${totalPrice} PLN`;
      window.localStorage.setItem("totalPrice", totalPrice);
    });
  }
}

// remove addition

function removeAddition() {
  for (let i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener("click", function (e) {
      const thisAdditionPrice = additionPrice[i].innerHTML;
      if (badge[i].classList.contains("active")) {
        totalPrice -= Number(thisAdditionPrice);
      }
      badge[i].classList.remove("active");
      carPrice.innerHTML = `Cena całkowita: ${totalPrice} PLN`;
      window.localStorage.setItem("totalPrice", totalPrice);
    });
  }
}

//set date

function setCalendar() {
  let now = new Date();
  now.setDate(now.getDate() + 14);
  let newDate = now.toLocaleDateString("en-CA");

  date.setAttribute("value", newDate);
  date.setAttribute("min", newDate);
}

// validation name

function validateName(surname) {
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regName.test(surname);
}

// validation inputs

function checkInputs() {
  const surnameValue = surname.value;
  const placeValue = place.value;
  if (!validateName(surnameValue) || surnameValue === "") {
    errorName.style.display = "block";
    surname.classList.add("invalid-input");
  } else {
    errorName.style.display = "none";
    surname.classList.remove("invalid-input");
  }
  if (placeValue === "") {
    errorPlace.style.display = "block";
    place.classList.add("invalid-input");
  } else {
    errorPlace.style.display = "none";
    place.classList.remove("invalid-input");
  }
}

//check payment type

function checkPayment() {
  const leasing = document.getElementById("flexRadioDefault1");
  const cash = document.getElementById("flexRadioDefault2");
  if (leasing.checked) {
    window.localStorage.setItem("payment", "leasing");
  } else if (cash.checked) {
    window.localStorage.setItem("payment", "gotówka");
  }
}

// buy a car

function buyCar() {
  buy.addEventListener("click", function (e) {
    e.preventDefault();
    checkInputs();
    checkPayment();
    const surnameValue = surname.value;
    const placeValue = place.value;
    if (validateName(surnameValue) && placeValue !== "") {
      window.location.href = "final.html";
    }
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("deliveryPlace");
  });
}

// save localStorage

function saveLocalStorage() {
  surname.addEventListener("keyup", function () {
    localStorage.setItem("name", surname.value);
  });

  place.addEventListener("keyup", function () {
    localStorage.setItem("deliveryPlace", place.value);
  });
}

//load localStorage

function loadLocalStorage() {
  const nameFromLS = localStorage.getItem("name");
  const placeFromLS = localStorage.getItem("deliveryPlace");
  surname.value = nameFromLS;
  place.value = placeFromLS;
}

//start function

function startAplication() {
  loadLocalStorage();
  saveLocalStorage();
  setCalendar();
  buyCar();
  addAddition();
  removeAddition();
}

window.onload = startAplication();
