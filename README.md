# Sad Orlovsky Codestyle - ESLint Shareable Config

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for my preferable code style.

## THE RULES OF FIGHT CLUB

- **Two spaces**
- **Single quotes**
- **No semicolons**

See all rules [here](index.js#L23).

## Nice code example

```javascript
// only ES2015
import fetch from 'fetch' // empty line after import

// space after function's name
export function hello (name = 'world') { // single quotes
  return `Hello, ${name}!` // two spaces for indent
} // no semicolons

// consts everywhere
export const fetchData = uri => { // no parens if single argument
  return fetch(uri)
    .then(res => res.json()) // arrow callback
    .then(data => ({ a: data.a, b: data.b }))
    // spacing inside single-line blocks
}
// empty line at the end of code
```

## Usage

You need `ESLint`

```bash
yarn add --dev eslint
```

Also you need `babel-parser` and some plugins

```bash
yarn add --dev babel-eslint eslint-plugin-import eslint-plugin-fp
```

Finally, install this shareable config

```bash
yarn add --dev @sadorlovsky/eslint-config
```

Add this to your .eslintrc file:

```json
{
  "extends": "@sadorlovsky"
}
```

### Use with AVA

```bash
yarn add --dev eslint-plugin-ava
```

```json
{
  "extends": [
    "@sadorlovsky",
    "@sadorlovsky/eslint-config/ava"
  ]
}
```

### Use with React

```bash
yarn add --dev eslint-plugin-react
```

```json
{
  "extends": [
    "@sadorlovsky",
    "@sadorlovsky/eslint-config/react"
  ]
}
```

### Use with both

```json
{
  "extends": [
    "@sadorlovsky",
    "@sadorlovsky/eslint-config/ava",
    "@sadorlovsky/eslint-config/react"
  ]
}
```

### You can override any option

```json
{
  "extends": [
    "@sadorlovsky",
    "@sadorlovsky/eslint-config/ava",
    "@sadorlovsky/eslint-config/react"
  ],

  "rules": {
    "semi": ["error", "always"]
  }
}
```
