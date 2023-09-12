// let / var / const

// nom en camelCase

// Types de variables 'simples' = 1 variable = 1 information
const myName = "Charline"; // String
const myLastName = "Laporte"; // String
const myAge = 30.0; // Float
const yearOfBirth = 1993; // Integer
const isMajor = true; // Boolean true = vrai | false = faux

/* 
Types 'complexes' = 1 variable = plusieurs informations
*/

/*
TABLEAU
const tableau = [ valeur1 , valeur2 , valeur3  ]
Pas de nombre de valeurs maximales
juste une séparation avec une virgule.
*/
const array = ["name", 1, 2, 3];
console.log(array);
console.log(array[0]);

/*
OBJECT 
paire => clé : valeur
*/
const myObject = {
  lastName: "Laporte",
  firstName: "Charline",
  iut: ["1A", "2A", "3A"],
  city: {
    name: "Bordeaux",
    zipcode: 3300,
  },
};
console.log(myObject);
console.log(myObject.lastName);
console.log(myObject.city.name);
console.log(myObject.iut[1]);
