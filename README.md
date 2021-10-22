# Template repository for manual setup of ReactJS/TypeScript/SCSS Modules project

## Dependencies

```javascript
npm i react react-dom react-router-dom -S
```

## Dev dependencies

### Config

Dev dependencies which are required for the webpack setup to run:

```javascript
npm i typescript webpack webpack-cli webpack-dev-server webpack-merge ts-loader ts-node ts-jest html-webpack-plugin clean-webpack-plugin copy-webpack-plugin sass sass-loader css-loader style-loader -D
```

### Config types

Webpack setup dependencies types:

```javascript
npm i @types/webpack @types/webpack-dev-server @types/copy-webpack-plugin -D
```

### Testing dependencies

Jest, jest cli handy tests filtering, mocking imports:

```javascript
npm i jest jest-watch-typeahead identity-obj-proxy -D
```

### Core types

```javascript
npm i @types/react @types/react-dom -D
```

### Testing types

Additional testing types (RTL, RTL-Jest, Hooks, User event):

```javascript
npm i @types/jest @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/react-hooks @testing-library/user-event -D
```

### Linters

Code linting (JS, prettier powered):

```javascript
npm i eslint eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-webpack-plugin eslint-plugin-prettier eslint-config-prettier -D
```

Code linting (CSS prettier powered):

```javascript
npm i stylelint stylelint-config-css-modules stylelint-config-prettier stylelint-prettier stylelint-webpack-plugin -D
```

### Linters types

Types for the code linting (JS, CSS):

```javascript
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

### Code checking

```javascript
npm i prettier husky -D
```

Husky also requires additional setup for git hooks.
