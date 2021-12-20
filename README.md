# Lancer l'application

### `npm install`
### `npm start`

# A propos du projet

Ce projet permet d'affecter des utilisateurs à une salle.

 - Chaque salle dispose d'un nombre limité de places. Une salle fait également partie d'une catégorie. Les salles sont triées par catégorie.
 - Il est possible d'ajouter un utilisateur ainsi que de rechercher des utilisateurs grâce à la barre de recherche.
 - Pour affecter un utilisateur à une salle, il faut le 'Drag and Drop' sur cette dernière.

 - Il est également possible de retirer un utilisateur d'une salle. On peut également modifier sa salle en utilisant le 'Drag and Drop'

## Refactoring
 - La gestion du state et la définition des structures de données sont mauvaises, je me retrouve à devoir modifier un tableau imbriqué dans un autre ce qui le rend la modification d'état beaucoup plus compliquée. En utilisant une Map<Room, String> la gestion aurai été beaucoup plus simple.
  - Utiliser un gestionnaire d'état style Redux

## BUG

 - Si on Drag and Drop un utilisateur déjà assigné depuis la barre de recherche, on peut le positionner dans plusieurs salles différentes.