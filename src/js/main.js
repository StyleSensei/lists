import "./../scss/main.scss";
class Car {
  brand;
  color;
  image;

  constructor(brand, color, image) {
    this.brand = brand;
    this.color = color;
    this.image = image;
  }
}
const car1 = new Car(
  "Audi",
  "Black",
  "https://i.pinimg.com/originals/82/a6/8d/82a68d0707267449e04ed4f74d96b3e0.jpg"
);
const car2 = new Car(
  "Mercedes",
  "White",
  "https://www.stratstone.com/-/media/stratstone/mercedes-benz/hero-banner/a-class.ashx"
);
const car3 = new Car(
  "Volvo",
  "Blue",
  "https://i.pinimg.com/736x/0e/69/99/0e699984d10d8a32328b7114675e81ff.jpg"
);
const car4 = new Car(
  "Strotoys",
  "Yellow",
  "https://m.media-amazon.com/images/I/71AamfmTJaL._AC_SL1500_.jpg"
);

const cars = [car1, car2, car3, car4];

console.log(cars);

const container = document.createElement("section");
document.body.appendChild(container);

for (let i = 0; i < cars.length; i++) {
  function createHTML() {
    const section = document.createElement("div");
    const imgContainer = document.createElement("figure");
    const carName = document.createElement("h2");
    const carColor = document.createElement("p");
    const carImage = document.createElement("img");

    carName.innerHTML = cars[i].brand;
    carColor.innerHTML = cars[i].color;

    carImage.setAttribute("src", cars[i].image);
    imgContainer.classList.add("imgContainer");

    container.appendChild(section);
    section.appendChild(carName);
    section.appendChild(carColor);
    section.appendChild(imgContainer);
    imgContainer.appendChild(carImage);

}
    createHTML()
    // container.addEventListener("click", () => {
    //     cars.splice(i, 1);
    //     console.log(cars);
    //     createHTML()
    // });
}
