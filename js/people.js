// people.js

// class Person definition
class Person {
  constructor(
    name,
    familyname,
    city,
    profession,
    hobbies,
    picture,
    bigPicture
  ) {
    this.name = name;
    this.familyname = familyname;
    this.city = city;
    this.profession = profession;
    this.hobbies = hobbies;
    this.picture = picture;
    this.bigPicture = bigPicture;
  }
}

// create individuals
let almila = new Person(
  "Almila",
  "Ada",
  "Actress",
  "Bern",
  "Model and Ballerina",
  "img/Almila_Ada_Actress_ModelUndBallerina_125x188.jpg",
  "img/Almila_Ada_Actress_ModelUndBallerina_125x188.jpg"
);

let can = new Person(
  "Can",
  "Yamar",
  "Actor",
  "Lausanne",
  "Nothing else",
  "img/Can_Yaman_Actor_NothingElse_125x167.jpg",
  "img/Can_Yaman_Actor_NothingElse_125x167.jpg"
);

let handel = new Person(
  "Handel",
  "Erçel",
  "Luzern",
  "Actress",
  "Model",
  "img/Handel_Erçel_Actress_Model_125x188.jpg",
  "img/Handel_Erçel_Actress_Model_125x188.jpg"
);

let mehmet = new Person(
  "Mehmet Akif",
  "Alakurt",
  "Zürich",
  "Model",
  "Actor",
  "img/MehmetAkif_125x188.jpg",
  "img/MehmetAkif_125x188.jpg"
);

// create list and include the individuals
let people = [almila, can, handel, mehmet];
