# Création d'une gallerie photo

## Ajout des publications:

### Créer la structure
1) Afin d'ajouter du contenu, créer dans le DOM :

- un formulaire ([balise form](https://developer.mozilla.org/fr/docs/Web/HTML/Element/form))
- un champ de texte pour le titre ([balise input](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input)) dans le formulaire
- un champ de texte pour saisir un lien vers une image
- un bouton pour soumettre ([balise button](https://developer.mozilla.org/fr/docs/Web/HTML/Element/button)).

Penser à leur ajouter des [attributs de champs "name"](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input#name) pour retrouver facilement leurs valeurs depuis le javascript.

2) Créer une balise dans le DOM ([balise ul](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ul)) dans laquelle seront ajoutées les photos. Penser à lui ajouter une classe pour la retrouver facilement depuis le javascript également.

3) Ajouter un peu de style ? :)

### Récupérer en javascript le contenu du champs
4) Créer [un listener](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener) afin d'écouter la soumission du formulaire et ainsi savoir quand ajouter une publication. Il faudra, pour cela, écrire un sélecteur avec [document.querySelector](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector) par exemple, puis placer le listener sur l'élement de formulaire récupéré. Faire un [console.log](https://developer.mozilla.org/fr/docs/Web/API/console/log) lorsque le formulaire est soumis (évènement [submit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)). Vérifier qu'il s'affiche bien dans la console du navigateur.

3) Récupérer la valeur des champs de texte depuis le listener.

4) Créer depuis le javascript une balise pour la publication ([balise li](https://developer.mozilla.org/fr/docs/Web/HTML/Element/li)) et y injecter le contenu de notre champ de texte ainsi qu'une image créée à partir de l'URL fournie.

### Ajouter la publication à la liste

5) Injecter la balise créée précédemment dans la balise ul présente dans le DOM. En théorie, la première publication avec image devrait apparaître dans la page :)

6) Ajouter un peu de style ? Il sera nécessaire d'ajouter une classe à la balise li créée depuis le javascript.

### Supprimer une publication (extra)
### Sauvegarder les publications lorsqu'on recharge la page (super extra!)