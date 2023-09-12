/* LES VARIABLES */

// camelCase

// Variables de type 'simple' : 1 variable = 1 info = 1 boite
const immuable = "Charline"; // Str = String = Chaine de caracteres
let lastName = "Laporte"; // String
const isMajor = true; // Boolean = true | false
const age = 30.0; // Float
const yearOfBirth = 1_993; // Entier | Int

console.log("Bonjour");

// Variable de type 'complexe' : 1 variable = plusieurs infos

// TABLEAU
const array = [10, 2, 3, 1];
const arrayOfStrings = ["C", "H", "A"];
const arrayMixte = [0, "1", 2, "3"];
const arrayInArray = [
  [1, 2, 3],
  ["1", "2", "3"],
];
console.log(arrayOfStrings);
console.log(array);
console.log(arrayOfStrings[2]);
console.log(arrayMixte[0]);
console.log(arrayInArray);

// OBJETS
// paire clé : valeur
const city = {
  name: "Bordeaux",
  zipcode: 3300,
  parcs: ["Bordelais", "Jardin Public", "Mussonville"],
  isFrench: true,
  twin: {
    name: "Lyon",
    zipcode: 6900,
    parcs: ["Tete d'or"],
    isFrench: true,
  },
};
console.log(city.name);
console.log(city.zipcode);
console.log(city.parcs[1]); // Jardin Public
console.log(city.twin.parcs[0]); // Tête d'or
