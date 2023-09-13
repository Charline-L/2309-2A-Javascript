/* 
LES EVENEMENTS 

clic
scroll
load
hover : mouseenter, mouseleave
touch (écran)
touches du clavier 

stop
start
*/

// Comment on écoute un évènement ?
// 1 : qui ? div, button, a, p... élément HTML
// 2 : qu'est ce que j'écoute ? quey type d'évènement
// 3 : finalité ? qu'est-ce qui se passe quand l'évènement se déclenche
const button = document.querySelector('.my-button')
// qui.addEventListener('quoi', function)
button.addEventListener('click', function() {
    console.log('click')
})