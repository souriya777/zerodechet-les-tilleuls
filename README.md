# LE PROJET

Démo https://zerodechet-les-tilleuls.firebaseapp.com

## leitmotiv (la mission)
Moins de déchets pour retrouver sa nature.

## but (le pourquoi)
Mettre en oeuvre mes nouvelles connaissances en HTML, CSS, JS et React; tout en développant une application utile.

## fonctionnalités (le quoi)
- Aider les aventuriers du Défi Famille à réduire leurs déchets;
- Mesurer leur progression
[- Informer et être informé des bonnes pratiques;]
- Organiser et participer à des échanges live (réunions, ateliers, newsletter...);

## audience (qui)
- Les familles participant au défi, qui ont besoin d'une application simple et efficace pour gérer au quotidien leur production de déchet
[- Les administrateurs pour la gestion des utilisateurs et des progressions.]

## chiffres
En 2016, nous avons produit 4,6 tonnes de déchets par habitant

568kg/ménage
"Le meilleur déchet est celui qu’on ne produit pas !"
"Réutiliser plutôt que jeter"

ADEME
- de pratiquer un tri des plastiques plus important, qui peut être facilité par l’extension des consignes de tri à tout le territoire,
- de favoriser le compostage et enfin de limiter le gaspillage alimentaire qui représente un coût de 16 milliards d’euros par an.

# DESIGN

## terminaux cibles
- PC (résolution standard 1366x768 => cf. https://www.w3schools.com/browsers/browsers_display.asp)
- tablettes
- smartphones

## navigateurs cibles
???? récent?

## philosophie
- responsive design en utilisant une stratégie "mobile-1st"
iPhone 320px
iPhone landscape 480px
tables 600px
standard website 992px
iPad landscape 1024px
wide website 1224px
- le design doit être : "simple, efficace, beau et moderne"

## typographies
- titre : lato?
- texte : ???

## couleurs
https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=299d3c&secondary.color=9d2f29
autre?

## médias (textes/images/vidéos/icônes/etc...)
texte : reprise de l'existant zerodechet
images : logo (reprise de l'existant zerodechet)
vidéos:
*nature promo : https://www.youtube.com/watch?v=pPODTlVRr5A
icônes : pour chaque menu

Images sur https://images.unsplash.com

bernard-hermant-657000-unsplash.jpg
evan-brockett-559924-unsplash.jpg
laura-mitulla-1433381-unsplash.jpg
nicole-honeywill-1086043-unsplash.jpg
sylvie-tittel-743127-unsplash.jpg


## technologies
- CSS (flexbox, grid, media queries)
- Préprocesseur (SASS)

# DÉVELOPPEMENT

## installation
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

## technologies
- JS(ES+)
- react 16.X, react-router

## tools
- papier/crayon (pour le maquettage)
- Create React App (mon usine de production)
- firebase (hosting)
- node-sass (sass in react)
- npm
- git / github
- Visual Studio Code + extensions (correction syntaxique, snippets, theme, refactoring)
- jest, enzyme (test)

## best practices
- BEM (Block Element Modifier)
- The 7-1 Pattern
- KISS / DRY
- redux : make state more predictable
(1/ State Tree 2/Get 3/Listen 4/Update)
separate UI logic from fetch data
UI driving by state

## useful links
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

#FOR ME
Promise - async await
https://javascript.info/async-await

REDUX
ACTION=what happened