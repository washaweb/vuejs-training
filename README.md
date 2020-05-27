# VueJs apprendre le router et les composants

Un projet pour apprendre le router et les composants de VueJs dans une application déployée en ligne de commande avec `vue-cli`.
Pour une meilleure configuration de votre éditeur (VSCode) voici les extensions qu'il est conseillé d'installer:

* Vetur https://marketplace.visualstudio.com/items?itemName=octref.vetur
* Vue VSCode Snippets https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets
* ESLint https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* Prettier - Code formatter https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

## Configuration de vsCode

Dans le fichier JSON des préférences de Visual Studio Code ( `ctrl-shipt-p` -> `préférences:Afficher les paramètre (en JSON)` ), voici la configuration utilisée pour Prettier, Vetur et Emmet:

```json
{
  //...
  "emmet.includeLanguages": {
    "vue": "html"
  },
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "vetur.format.defaultFormatter.html": "prettier",
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
  "prettier.jsxSingleQuote": true,
  "prettier.requireConfig": true,
  "prettier.vueIndentScriptAndStyle": true,
  //...
}
```

## Project setup

Vous pouvez initialiser ce projet avec npm ou yarn :

avec npm :

```sh
    npm install
```

avec yarn :

```sh
    yarn install
```

### Lancer le serveur de développement

avec npm :

```sh
    npm run serve
```

avec yarn :

```sh
yarn serve
```

### Compiler le projet pour la publication sur un serveur de production

avec npm :

```sh
    npm run build
```

avec yarn :

```sh
    yarn build
```

### Linter

Pour corriger votre code avec le linter :
avec npm :

```sh
    npm run lint
```

avec yarn :

```sh
yarn lint
```

### Configuration du projet

```sh
    vue ui
```

Voir [Configuration Reference](https://cli.vuejs.org/config/).
