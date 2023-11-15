import './../scss/main.scss';

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
