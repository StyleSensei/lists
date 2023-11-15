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

import './../scss/main.scss'
class Pony {
    img;
    name;
    kind;
    sex;
    occupation;
    
    constructor(img, name, kind, sex, occupation) {
        this.img = img;
        this.name = name;
        this.kind = kind;
        this.sex = sex;
        this.occupation = occupation;
    }
}

  function createHtmlForPony (pony) {
    const ponyContainer = document.createElement("div");
    const imgTag = document.createElement("img");
    const nameTag = document.createElement("h2");
    const kindTag = document.createElement("p");
    const sexTag = document.createElement("p");
    const occupationTag = document.createElement("p");

    ponyContainer.className = "ponyCard";
    ponyContainer.addEventListener("click", () => {
      console.log(pony);
    });

    for (let i = 0; i < ponies.length; i++) {
    
    imgTag.setAttribute("src", ponies[i].img); 

    nameTag.innerHTML = pony.name;
    kindTag.innerHTML = pony.kind;
    sexTag.innerHTML = pony.sex;
    occupationTag.innerHTML = pony.occupation;

    ponyContainer.appendChild(nameTag);
    ponyContainer.appendChild(kindTag);
    ponyContainer.appendChild(sexTag);
    ponyContainer.appendChild(occupationTag);
    document.body.appendChild(ponyContainer);
}
  }
  
const pony = new Pony("https://static.wikia.nocookie.net/characterprofile/images/a/a8/RD_Vector.png/revision/latest/scale-to-width-down/1200?cb=20160103051158", "Rainbow Dash", "pegasus", "female", "Weather Patrol");
const pony2 = new Pony("https://static.wikia.nocookie.net/near-pure-good-hero/images/3/31/Pinkie_Pie_transparent.png/revision/latest?cb=20221016090917", "Pinkie Pie", "earth pony", "female", "Baker/party organizer");
const pony3 = new Pony("https://static.wikia.nocookie.net/p__/images/c/c7/Twilight_Sparkle_Alicorn_vector.png/revision/latest?cb=20230823130111&path-prefix=protagonist", "Twilight Sparkle", "unicorn", "female", "Leader of the Council of Friendship");


  const ponies = [pony, pony2, pony3];
  for (let i = 0; i < ponies.length; i++) {
    createHtmlForPony(ponies[i]);
  }import './../scss/main.scss';

export class Food {
  spacy;
  mild;
  sweet;
  constructor(spacy, mild, sweet) {
    this.spacy = spacy;
    this.mild = mild;
    this.sweet = sweet;
  }
}
// window.onload = function(){
const food1 = new Food("Very hot", "mild", "sweet");
console.log(food1);

// skapa en div
const tasteDiv = document.createElement("div");
tasteDiv.innerHTML = food1.spacy;
tasteDiv.innerHTML = food1.mild;
tasteDiv.innerHTML =food1.sweet;

document.body.appendChild(tasteDiv);
