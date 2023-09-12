/* EXERCICE 2 - 15 minutes

Parcourir le tableau ci-après : 
- pour chacunes des planètes dire si elle est plus petite ou plus grande que la terre
- lorsque vous êtes sur la planète Terre ne rien afficher
- lorsque vous êtes sur la planète Pluton afficher "N'est plus considérée comme une planète"

Documentation utile : 
- If/Else : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else#exemples
- For : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for 
- Opérateurs de comparaison : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#op%C3%A9rateurs_de_comparaison


==> Résultat dans la console : 

Plus petite
Plus petite

Plus petite
Plus grande
Plus grande
Plus grande
Plus grande
N'est plus considérée comme une planète

<=== 

*/

const planets = [
    {
        name: "Mercury",
        size: 2400,
    }, 
    {
        name: "Venus", 
        size: 6052,
    }, 
    {
        name: "Earth",
        size: 6371,
    }, 
    {
        name: "Mars",
        size: 3390,
    }, 
    {
        name: "Jupiter",
        size: 69911
    }, 
    {
        name: "Saturn",
        size: 58232,

    }, 
    {
        name: "Uranus",
        size: 25362,
    }, 
    {
        name: "Neptune",
        size: 24622
    },
    {
        name: "Pluton",
        size: 1185
    }
]