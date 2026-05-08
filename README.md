# MyBourse

MyBourse est une application web en TypeScript permettant de visualiser des données boursières sous forme de graphiques interactifs.

---

## Fonctionnalités

- Récupération de données via API REST
- Affichage de graphiques avec Chart.js
- Comparaison de 2 actions boursières
- Filtrage par période (7 jours, 1 mois, 1 an)
- Interface dynamique avec le DOM
- Mise à jour automatique du graphique
- Gestion des erreurs (réseau et données)

---

## Technologies utilisées

- TypeScript
- JavaScript
- Chart.js
- Vite
- HTML
- CSS

---

## Structure du projet

src/
api/        -> requêtes API
charts/     -> création des graphiques
models/     -> types TypeScript
ui/         -> interface DOM
utils/      -> fonctions utilitaires
styles/     -> styles CSS
main.ts     -> point d’entrée

---

## Installation

npm install

---

## Lancement

npm run dev

---

## Choix techniques

- TypeScript avec typage strict
- Architecture modulaire
- Chart.js pour les graphiques
- DOM natif sans framework
- Gestion des erreurs avec try/catch

---

## Gestion des erreurs

L’application affiche des messages clairs en cas de :
- problème réseau
- données invalides
- erreur utilisateur

---

## Membres du projet

- Nil Boutolleau
---
