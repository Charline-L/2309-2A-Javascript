/* 
LES EVENEMENTS EN JAVASCRIPT 

click
hover
scroll
taper des touches
rester appuyer
touch
.
.
.
ma video est terminée
ma video commence sa lecture... 
*/


// LE CLICK
// Pour écouter un évènement j'ai besoin de plusieurs choses : 
// 1 : qui (j'écoute) : quel élément HTML ?
// 2 : quoi : quel évènement j'écoute ? click, hover, press...
// 3 : ce qui doit se faire si fait l'action
const button = document.querySelector('button')
/* 
Comment écrire un add event listener : 
qui.addEventListener('quoi', function(){
    le code que je dois faire
})
*/ 
button.addEventListener('click', function() {
    console.log('click')
})



// LE CLAVIER
window.addEventListener('keypress', function(event) {
    console.log(event)
})