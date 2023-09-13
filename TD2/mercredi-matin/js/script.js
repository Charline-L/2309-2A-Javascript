/* 
COMMUNIQUER ou MANIPULER LE DOM 
Document Object Model
Récupérer un élément HTML 
*/

console.log(document);
// Changer les propriétés du document
document.title = "J'ai changé le titre";

// Ajouter du html dans un élément HTML existant
const div = document.querySelector(".my-div");
div.innerHTML = '<ul style="color: red"><li>J\'ai fait une liste</li></ul>';

// Modifier le texte d'un élément HTML
const p = document.querySelector("#my-para");
p.textContent = "Porta Nibh Ridiculus";

// Modifier directement le CSS d'un élément
const divRed = document.querySelector(".red");
// background-color: #FF0000
divRed.style.backgroundColor = "#FF0000";

// Ajouter ou Supprimer des classes
const button = document.querySelector("button");
button.classList.add("disabled");
// button.classList.remove("disabled");

// Modifier un attribut HTML
const img = document.querySelector("img");
img.setAttribute("src", "img/Wiki.jpg");
img.setAttribute("alt", "Le logo de Wikipedia");
