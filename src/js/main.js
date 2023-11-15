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
  }