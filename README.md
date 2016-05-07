# Sad Orlovsky Codestyle - ESLint Shareable Config

[![Build Status](https://travis-ci.org/sadorlovsky/codestyle.svg)](https://travis-ci.org/sadorlovsky/codestyle)

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for my preferable code style.

**WORK IN PROGRESS**

## THE RULES OF FIGHT CLUB

- **Two spaces**
- **Single quotes**
- **No semicolons**

See all rules [here](index.js#L25).

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

You need ESLint

```bash
npm install --save-dev eslint@2.9.0
```

Also you need babel-parser and import-plugin

```bash
npm install --save-dev babel-eslint@6.0.3 eslint-plugin-import@1.7.0
```

Finally install this shareable config

```bash
npm install --save-dev @sadorlovsky/eslint-config
```

Add this to your .eslintrc file:

```json
{
  "extends": "@sadorlovsky"
}
```

### Usage with AVA

```bash
npm install --save-dev eslint-plugin-ava@2.3.1
```

```json
{
  "extends": [
    "@sadorlovsky",
    "@sadorlovsky/eslint-config/ava"
  ]
}
```

### Usage with react

```bash
npm install --save-dev eslint-plugin-react@5.0.1
```

```json
{
  "extends": [
    "@sadorlovsky",
    "@sadorlovsky/eslint-config/react"
  ]
}
```

### Usage with both

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

## License

MIT © [Zach Orlovsky](https://orlovsky.rocks)
