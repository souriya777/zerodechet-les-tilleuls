# LE PROJET

Démo https://zerodechet-les-tilleuls.firebaseapp.com

/!\ Optimisé pour une expérience sur smartphone !

## but (le pourquoi)
Mettre en oeuvre mes nouvelles connaissances en HTML, CSS, JS et React; tout en développant une application utile.

## audience (pour qui)
- Les familles participant au défi, qui ont besoin d'une application simple et efficace pour gérer au quotidien leur production de déchet

PROCHAINEMENT :
- Les administrateurs pour la gestion des utilisateurs et des progressions.

## fonctionnalités (le quoi)
- Saisir les pesées des déchets
- Mesurer la progression des utilisateurs de manière : hebdomadaire, mensuelle, trimestrielle
- Proposer de participer à des échanges live (réunions, ateliers...)
=> reprise de l'existant

PROCHAINEMENT :
- Modifier ses informations personnelles (noms, nombre de personnes composant le foyer, l'objectif...)
- Paramétrer son compte (recevoir des newsletter, des notifications...)
- Fournir une assistance, un formulaire de contact et une FAQ
- Proposer du Don alimentaire
- Organiser un RDV directement depuis l'applicdation
- Poster sur le blog
- Accéder aux astuces
- Inviter des amis


# DESIGN

## terminaux cibles
J'ai choisi d'opter pour une stratégie "mobile-1st" car je n'avais pas à accès à toutes les fonctionnalités de l'application existante.

De plus, cela me permettait de me concentrer sur les fonctionnalités essentielles

Je suis donc partie du plus petit smartphone cible (iPhone 5) pour designer l'application.

PROCHAINEMENT, support des :
- tablettes
- PCs (résolution standard 1366x768 => cf. https://www.w3schools.com/browsers/browsers_display.asp)

## navigateurs cibles
Chrome, firefox, safari

## philosophie
Le design doit être : 

"simple et efficace... beau et moderne si possible"

=> J'ai essayé de ne pas utiliser de librairies "toute faite" (eg. react-material...), j'ai privilégié le CSS...

Ex. : 
- les inputs de formulaire, 
- l'effet "splash" sur le tout premier écran

Par contre, pour certains effets visuel, j'ai utilisé des libraries tierces : 
- *highcharts* : graphique des stats 
=> rendu hyper beau, utilisation simplissime
- *react-redux-loading* : la bar de "loading" sur le haut de l'écran 
=> simple & efficace
- *react-slick* : le slider des images
=> il y a une pléthore de librairie, mais cette dernière est l'une des plus fluide et flexible à mon goût...
- *react-transition-group* : l'effet "fade" quand on passe d'un écran à un autre
=> standard, fait son job comme il faut

## typographies
Montserrat

## couleurs
Ma palette :
- $color-primary: #fff;
- $color-secondary: #7adf9e;
- $color-secondary-dark: #29a956;
- $color-accent: #5849e0;
- $color-accent-light: #8075e7;
- $color-major: #ec0000;
- $color-grey: #555;
- $color-grey-2: #e5e5e5;
- $color-primary-text: #000;
- $color-secondary-text: #fff;
- $color-backgnd-popup: rgba(#000, .8);
- $color-card-shadow: rgba(0, 0, 0, .2);
- $color-workshop: #ffd618;
- $color-workshop-full: - $color-major;
- $color-event: #2dafe6;
- $color-rdv-sub: - $color-secondary-dark;
- $color-rdv-unsub: #e75338;
- $color-rdv-wait: #e79238;

## médias (textes/images/vidéos/icônes/etc...)
- texte : reprise de l'existant zerodechet + invention perso
- images : créations perso + images libres de droits
https://isorepublic.com/
https://unsplash.com/
- icônes : svg libres de droits
https://icones8.fr/icons
https://icomoon.io/app/#/select

## technologies
- CSS (flexbox, grid, media queries)
- Préprocesseur (SASS)

# DÉVELOPPEMENT

## technologies
- JS(ES+)
- react 16.X
- lib react : 

## tools
- maquettage : papier/crayon
- usine de prod : Create React App
- hosting/authentification : firebase
- pré-processeur : node-sass (sass en react)
- versionning: git / github
- mon éditeur préféré :) : vs code
- test + mock : jest
- navigation : react-router
- gestion de l'état de mon appliccation : redux
- gestion des formulaires : formik + yup
- manipulation des dates : moment
- fonctions utilitaires : lodash

## best practices
- BEM (Block Element Modifier) : pour "normer" mes classes CSS
- The 7-1 Pattern
- KISS / DRY (j'ai essayé...)

## installation en local
1/ créer une base dans Firebase (firestore)

2/ créer un fichier ".env" à la racine du projet (ex. votre-projet/.env)
=> le ".env" (sans nom) sera chargé par défaut

cf. https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables#what-other-env-files-can-be-used

cf. https://medium.com/@vks18765/novice-guide-to-securing-api-and-firebase-key-in-create-react-app-and-deploying-it-on-heroku-df68c967973

3/ copier les paramètres suivants (en adaptant les valeurs)
REACT_APP_FIREBASE_API_KEY=VOTRE_CLE
REACT_APP_FIREBASE_AUTH_DOMAIN=VOTRE_DOMAINE.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://VOTRE_DOMAINE.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=VOTRE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=VOTRE_DOMAINE.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=VOTRE_SENDER_ID

4/ exécuter la commande "yarn" pour installer le projet

## liens utiles
Fonts
https://fonts.google.com

Free photo
https://isorepublic.com

BEM naming convention
http://getbem.com/naming/

Sass architecture
https://sass-guidelin.es/#architecture

Sass architecture (boilerplate)
https://github.com/HugoGiraudel/sass-boilerplate/tree/master/stylesheets

SVG "scalables" en react
https://css-tricks.com/creating-svg-icon-system-react/

react, react-router and code splitting (loading optimization)
https://tylermcginnis.com/react-router-code-splitting/

optimistic update in react
https://medium.com/@_erikaybar/optimistic-ui-updates-in-react-9e139ffa2e45

mobile 1st strategy
https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/

grid css ?
https://markus.oberlehner.net/blog/building-a-good-old-12-column-css-grid-framework-with-css-grid-layout/

Redux store ou React state?
https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978

Formik : librarie efficace pour gérer les formulaires
https://jaredpalmer.com/formik/docs/overview

great tutorial to use enzyme with react
https://scotch.io/tutorials/testing-react-components-with-enzyme-and-jest

les déchets en france
http://www.cniid.org/Les-dechets-en-France-quelques-chiffres,151

utilisation des singletons en JS
https://medium.com/@dmnsgn/singleton-pattern-in-es6-d2d021d150ae

chrome hack autofill
https://gist.github.com/EdPoole/8740898

http://webagility.com/posts/the-ultimate-list-of-hacks-for-chromes-forced-yellow-background-on-autocompleted-inputs

https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/

iphone testing
http://mobiletest.me

js : how to check null or undefined?
https://stackoverflow.com/questions/2559318/how-to-check-for-an-undefined-or-null-variable-in-javascript

easily add react environmental variables
https://medium.com/@vks18765/novice-guide-to-securing-api-and-firebase-key-in-create-react-app-and-deploying-it-on-heroku-df68c967973

pourquoi est-ce difficile de styler un input[type=range]
https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/

css selecteur efficace
https://csswizardry.com/2011/09/writing-efficient-css-selectors/

normalize accent
https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript

Promise - async await
https://javascript.info/async-await

Udemy web developpeur notions

Tyler Mc Ginnis
https://tylermcginnis.com/