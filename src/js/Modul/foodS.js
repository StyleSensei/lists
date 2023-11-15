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
const food1 = new Food("spacy", "mild", "sweet");
console.log(food1);
// skapa en div
const tasteDiv = document.createElement("div");
let foodString = "spacy:" + food1.spacy + "<br>";
outputString = "mild:" + food1.mild + "<br>";
outputString += "sweet:" + food1.sweet + "<br>";

console.log("");

tasteDiv.innerHTML = foodString;
console("food1");

//const tasteDiv = [new Food("spacy"), new Food("mild"), new Food("sweet")];
