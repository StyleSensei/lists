import {CarBrand} from './Cars.js';
import "./../scss/main.scss"

const mercedes = new CarBrand("Mercedes", "2021", "https://www.mercedes-benz.se/content/sweden/sv/passengercars/models/coupe/c-class/amg/_jcr_content/root/responsivegrid/tabs_1684506500_copy/tabitem/simple_teaser/simple_teaser_item.component.damq2.3335389185643.jpg/mercedes-amg-c-class-c205-amg-options-night-package-exterior-764x573-06-2022.jpg");
const bmw = new CarBrand("BMW", "2018", "https://static.cdn-expressen.se/images/15/48/154833bd3ba0408eab46d8e68f71a301/annan/2560.jpg");
const porsche = new CarBrand("Porsche", "2022", "https://hips.hearstapps.com/hmg-prod/images/911-turbo-19-1583172084.jpg?crop=0.785xw:0.588xh;0.109xw,0.261xh&resize=1200:*");

let carBrands = [mercedes, bmw, porsche];

const newHtml = () => {
  const garage = document.getElementById("garage");
  garage.innerHTML = "";

  carBrands.forEach((car, i) => {
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const removeButton = document.createElement("button");
    const myImage = document.createElement("img");

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
