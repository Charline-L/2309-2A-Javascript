/* 
MANIPULATION DE DOM 
DOM = Document Object Model
*/

// document = "copie" de notre HTML mais version Javascript

// Modifier en ajoutant du HTML à un élément existant
const myDiv = document.querySelector(".my-div")
console.log(myDiv)
myDiv.innerHTML = '<ul><li>Changer le contenu de ma div</li></ul>'

// Modifier le texte de l'élément
const para = document.querySelector("#para")
para.textContent = 'Je change juste le texte et pas le HTML </br>'

// Modifier le style CSS
const paraRed = document.querySelector('.text')
// background-color: red
paraRed.style.backgroundColor = '#00FF00'

// Ajouter ou supprimer des classes CSS
const button = document.querySelector('button')
button.classList.add('disabled')
button.classList.remove('blue')

// Modifier les attributs
const img = document.querySelector("img")
// setAttribute(duNom , deLaValeur)
img.setAttribute("src", "img/Wiki.jpg")

// Prompt 
const firstName = prompt('ton prénom ?')
console.log(firstName)