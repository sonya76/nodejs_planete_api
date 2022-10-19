# Api [rest](https://developer.mozilla.org/fr/docs/Glossary/REST) avec node.js,express et sqlite

**But du projet** : Créer une **api rest** avec le framework **express** , **node.js** et **sqlite**.

## Création de la base de donnée et table associée

- Créer une base de donnée **univers** dans **sqlite** à travers **node.js**.
- Dans la base de donnée **univers** créer une table **planetes** avec les champs suivant :
	- id 
	- nom
	- image (url)
	- created_at
- Inserer dans la table **planetes** les planetes **Venus,Terre,Mercure,Mars** avec une image(url) pour chaque planete.

## Framework express

Apres avoir fait vos recherches sur le framework **express**. 

- Mettre en place le server **express**
- Le port pour le server **express** sera : **7500** sur le **localhost**.
- La route **/** devra renvoyer le message **Bienvenue dans l'api rest des planetes**
- La route **/planetes** devra renvoyer la liste de toutes les planetes au format json (id,nom,image,created_at)

## Git

- Faite un **fork** du depot [http://github.com/formeka/nodejs_planete_api](http://github.com/formeka/nodejs_planete_api)
- Travailler dans une branche **develop**
- Faire des **commits atomiques**
- Tous vos **commits** doivent commencer par une majuscule
- Les branches **feature** doivent se nommer **feature/nom_de_la_feature**
- Faites des **pull request**

## Questions

Si vous avez des questions ouvrer des **issues** sur le depot [http://github.com/formeka/nodejs_planete_api](http://github.com/formeka/nodejs_planete_api) et non sur votre **fork** !.
