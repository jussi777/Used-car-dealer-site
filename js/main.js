const cardWrapper = document.querySelector(".card-wrapper");
const brandInput = document.getElementById("brand-input");
const productionYearInput = document.getElementById("production-year");
const mileageInput = document.getElementById("mileage");
const searchBtn = document.getElementById('searchBtn')

// objects

let cars = [
  {
    name: "Mercedes",
    price: 35000,
    productionYear: 2005,
    mileage: 135000,
    power: 120,
    fuel: "benzyna",
    img: "images/mercedes-amg-gt-4-door-coupe-g99aaca0d0_640.jpg",
  },

  {
    name: "Opel",
    price: 20000,
    productionYear: 2010,
    mileage: 248000,
    power: 100,
    fuel: "diesel",
    img: "images/car-g1b0fb4113_640.jpg",
  },

  {
    name: "Skoda",
    price: 12000,
    productionYear: 2002,
    mileage: 324000,
    power: 90,
    fuel: "diesel",
    img: "images/car-g818279e6f_640.jpg",
  },

  {
    name: "Audi",
    price: 65000,
    productionYear: 2021,
    mileage: 70000,
    power: 150,
    fuel: "benzyna",
    img: "images/automobile-g9e87be046_640.jpg",
  },

  {
    name: "Honda",
    price: 40000,
    productionYear: 2019,
    mileage: 233000,
    power: 120,
    fuel: "diesel",
    img: "images/car-ga0e792b25_640.jpg",
  },

  {
    name: "Lamborghini",
    price: 100000,
    productionYear: 2008,
    mileage: 199000,
    power: 170,
    fuel: "benzyna",
    img: "images/lamborghini-g8e6c6ed1e_640.jpg",
  },
];

// generate car

cars.forEach((car) => {
  const card = document.createElement("div");
  card.classList.add("card");
  cardWrapper.appendChild(card);
  const img = document.createElement("img");
  img.src = car.img;
  card.appendChild(img);
  const cardBody = document.createElement("div");
  card.appendChild(cardBody);
  const carTitle = document.createElement("div");
  carTitle.classList.add("car-title");
  cardBody.appendChild(carTitle);
  const carName = document.createElement("h4");
  carName.innerText = car.name;
  carTitle.appendChild(carName);
  const carPrice = document.createElement("h4");
  carPrice.innerText = `${car.price} PLN`;
  carTitle.appendChild(carPrice);
  const specList = document.createElement("ul");
  specList.classList.add("spec-list");
  cardBody.appendChild(specList);
  const productionYear = document.createElement("li");
  productionYear.innerHTML = `<i class="fa fa-solid fa-calendar"></i> ${car.productionYear} `;
  specList.appendChild(productionYear);
  const mileage = document.createElement("li");
  mileage.innerHTML = `<i class="fa fa-solid fa-road"></i> ${car.mileage} km`;
  specList.appendChild(mileage);
  const power = document.createElement("li");
  power.innerHTML = `<i class="fa fa-solid fa-fire"></i> ${car.power}KM`;
  specList.appendChild(power);
  const fuel = document.createElement("li");
  fuel.innerHTML = `<i class="fa fa-solid fa-gas-pump"></i> ${car.fuel}`;
  specList.appendChild(fuel);
});

const cards = document.querySelectorAll(".card");

// choosing car

function chooseCar(e) {
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      window.localStorage.setItem("myCarName", cars[i].name);
      window.localStorage.setItem("myCarPrice", cars[i].price);
      window.localStorage.setItem("myCarPicture", cars[i].img);
      window.location.href = "form.html";
    });
  }
}

chooseCar();

// brand search

brandInput.addEventListener("keyup", function (e) {
  const value = e.target.value.toLowerCase();
  for (let i = 0; i < cards.length; i++) {
    const name = cars[i].name.toLocaleLowerCase();
    if (name.indexOf(value) !== -1) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
});

//map

function initMap() {
  const kosowce = { lat: 50.81384, lng: 18.02208 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: kosowce,
  });
  const marker = new google.maps.Marker({
    position: kosowce,
    map: map,
  });
  const contentString = "Kosowce 8, Dąbrówka Łubniańska";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}

////

searchBtn.addEventListener('click', function (e) {
const yearValue = productionYearInput.value;
console.log(yearValue)
})

// sort by production year

productionYearInput.addEventListener("click", function (e) {
  let value = e.target.value;
  const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);
  switch (value) {
    case "production-year":
      for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
      }
      break;
    case "2005-2009":
      const years0509 = range(2005, 2009);
      for (let i = 0; i < cards.length; i++) {
        const year = cars[i].productionYear;
        if (years0509.indexOf(year) !== -1) {
          cards[i].style.display = "block";
        } else {
          cards[i].style.display = "none";
        }
      }
      break;
    case "2010-2014":
      const years1014 = range(2010, 2014);
      for (let i = 0; i < cards.length; i++) {
        const year = cars[i].productionYear;
        if (years1014.indexOf(year) !== -1) {
          cards[i].style.display = "block";
        } else {
          cards[i].style.display = "none";
        }
      }
      break;
    case "2015-2019":
      const years1519 = range(2015, 2019);
      for (let i = 0; i < cards.length; i++) {
        const year = cars[i].productionYear;
        if (years1519.indexOf(year) !== -1) {
          cards[i].style.display = "block";
        } else {
          cards[i].style.display = "none";
        }
      }
      break;
    case "2020-2022":
      const years2022 = range(2020, 2022);
      for (let i = 0; i < cards.length; i++) {
        const year = cars[i].productionYear;
        if (years2022.indexOf(year) !== -1) {
          cards[i].style.display = "block";
        } else {
          cards[i].style.display = "none";
        }
      }
      break;
  }
});

// sort by mileage

mileageInput.addEventListener("click", function (e) {
  let value = e.target.value;
  const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);
  switch (value) {
    case "mileage":
      for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
      }
      break;
    case "50000-100000":
      const mileage50100 = range(50000, 100000);
      for (let i = 0; i < cards.length; i++) {
        const mileage = cars[i].mileage;
        if (mileage50100.indexOf(mileage) !== -1) {
          cards[i].style.display = "block";
        } else {
          cards[i].style.display = "none";
        }
      }
      break;
    case "101000-200000":
      const mileage101200 = range(101000, 200000);
      for (let i = 0; i < cards.length; i++) {
        const mileage = cars[i].mileage;
        if (mileage101200.indexOf(mileage) !== -1) {
          cards[i].style.display = "block";
        } else {
          cards[i].style.display = "none";
        }
      }
      break;
    case "201000-300000":
      const mileage201300 = range(201000, 300000);
      for (let i = 0; i < cards.length; i++) {
        const mileage = cars[i].mileage;
        if (mileage201300.indexOf(mileage) !== -1) {
          cards[i].style.display = "block";
        } else {
          cards[i].style.display = "none";
        }
      }
      break;
    case "301000-400000":
      const mileage301400 = range(301000, 400000);
      for (let i = 0; i < cards.length; i++) {
        const mileage = cars[i].mileage;
        if (mileage301400.indexOf(mileage) !== -1) {
          cards[i].style.display = "block";
        } else {
          cards[i].style.display = "none";
        }
      }
      break;
  }
});
