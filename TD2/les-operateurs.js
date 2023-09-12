/* LES OPERATEURS DE COMPARAISON */
// est égale
// n'est pas égale
// est supérieur
// est inférieur

// Égalité
const stringA = "aaa";
const stringB = "bbb";
console.log("stringA == stringB", stringA == stringB);
const numberA = 1;
const numberB = "1";
console.log("numberA == numberB", numberA == numberB);
console.log("numberA === numberB", numberA === numberB);

// Inégalité
const stringC = "ccc";
const stringD = "ddd";
console.log("stringC != stringD", stringC != stringD);
const numberC = 1;
const numberD = "1";
console.log("numberC !== numberD", numberC !== numberD);

// Supériorité
const one = 1;
const zero = 0;
console.log("one > zero", one > zero);
console.log("zero > one", zero > one);

// Infériorité
const two = 2;
const three = 3;
console.log("two < three", two < three);
console.log('"a" < "b"', "a" < "b");
