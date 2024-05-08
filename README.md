**README.md**

# Modèle d'Application Vite React TypeScript

Ce modèle d'application est conçu pour servir de base solide à tous vos projets utilisant React avec TypeScript, en utilisant Vite comme bundler. Il fournit une structure initiale organisée et des configurations préconfigurées pour une expérience de développement fluide et efficace.

## Caractéristiques

- **React** - La bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- **TypeScript** - Un sur-ensemble de JavaScript qui apporte un typage statique à votre code.
- **Vite** - Un outil de build rapide qui offre une expérience de développement en temps réel.
- **ESLint** - Un linter de code statique pour identifier et corriger les problèmes de code.

## Prérequis

Assurez-vous d'avoir Node.js installé sur votre système. Vous pouvez le télécharger et l'installer depuis [nodejs.org](https://nodejs.org/).

## Installation

1. Cloner ce dépôt: `git clone https://github.com/maximemarc/project-base-ui.git`
2. Accédez au répertoire du projet: `cd mon-projet`
3. Installez les dépendances: `npm install`

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter les scripts suivants:

### `npm run dev`

Démarre le serveur de développement. Ouvrez [http://localhost:5173/](http://localhost:5173/) pour voir l'application dans votre navigateur.

La page se recharge automatiquement si vous apportez des modifications au code source.

### `npm run build`

Construit l'application pour la production dans le répertoire `dist`. Il regroupe correctement React en mode production et optimise la construction pour les meilleures performances.

### `npm run format`

Formate votre code en utilisant Prettier pour maintenir un style de code cohérent.

## Structure du Projet

```
mon-projet/
  ├── node_modules/
  ├── public/
  │   ├── img/
  │   └── ...
  ├── src/
  │   ├── components/
  │   │   └── ...
  │   ├── styles/
  │   │   └── ...
  │   └── ...
  │   ├── App.tsx
  │   └── index.tsx
  ├── .eslintrc.js
  ├── .prettierrc
  ├── vite.config.ts
  └── package.json
```

- **`public/`**: Contient le fichier HTML principal et d'autres ressources statiques.
- **`src/`**: Contient le code source de l'application.
  - **`components/`**: Dossier pour les composants React réutilisables.
  - **`styles/`**: Dossier pour les fichiers de styles CSS ou SCSS.
  - **`App.tsx`**: Le composant principal de l'application.
  - **`index.tsx`**: Point d'entrée de l'application.
- **`.eslintrc.js`**: Configuration ESLint.
- **`.prettierrc`**: Configuration Prettier.
- **`vite.config.ts`**: Configuration Vite.
- **`package.json`**: Fichier de configuration npm.

## Contribution

Les contributions sont les bienvenues! N'hésitez pas à ouvrir une issue pour signaler des bogues ou à soumettre une pull request pour proposer des améliorations.

## Licence

Ce modèle est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.

---

N'hésitez pas à personnaliser ce modèle selon les besoins spécifiques de vos projets. Bon codage! 🚀
