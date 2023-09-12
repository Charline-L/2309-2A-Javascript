/* BOUCLE FOR */

// La boucle for à partir d'un nombre
// Pour executer un programme plusieurs fois
// Partie 1 > initialiser notre boucle : je crée un variables
// Partie 2 > vérifier une condition : je crée une limite à boucle
// Partie 3 > incrementation : je passe à l'index suivant
for (let index = 0; index < 10; index++) {
  // console.log("bonjour", index);
}

const myTodo = [
  "acheter du pain",
  "prendre le tram",
  "prendre le tram",
  "prendre le tram",
  "prendre le tram",
  "prendre le tram",
  "prendre le tram",
  "...",
  "appeler...",
  "..",
]; // les choses à faire
const numberTodos = myTodo.length;
for (let i = 0; i < numberTodos; i++) {
  console.log(myTodo[i]);
}
