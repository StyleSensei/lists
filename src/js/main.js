import {CarBrand} from './Cars.js';

const mercedes = new CarBrand("Mercedes", "2021", 750000);
const bmw = new CarBrand("BMW", "2018", 520000);
const porsche = new CarBrand("Porsche", "2022", 1000000);

let carBrands = [mercedes, bmw, porsche];

const newHtml = () => {
  const garage = document.getElementById("garage");
  garage.innerHTML = "";

  carBrands.forEach((car, i) => {
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const removeButton = document.createElement("button");

    title.innerHTML = car.brand;
    removeButton.innerHTML = "Köp";
    removeButton.addEventListener("click", (e) => {

      carBrands.splice(i, 1);
      newHtml();
    });

    container.appendChild(title);
    container.appendChild(removeButton);
    garage.appendChild(container);
  });
};

newHtml();
