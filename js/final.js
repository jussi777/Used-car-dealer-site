const thanksText = document.getElementById("thanks");
const price = document.getElementById("price");
const payment = document.getElementById("payment");
const picture = document.getElementById("car-picture");

const carName = window.localStorage.getItem("myCarName");
const carPrice = window.localStorage.getItem("totalPrice");
const carPayment = window.localStorage.getItem("payment");
const carPicture = window.localStorage.getItem("myCarPicture");

thanksText.innerText = `Twój wybór to ${carName}.`;
price.innerText = `Cena auta wynosi: ${carPrice} PLN.`;
payment.innerText = `Wybrana przez Ciebie forma finansowania to: ${carPayment}.`;
picture.src = carPicture;
