# Sad Orlovsky Codestyle - ESLint Shareable Config

[![Build Status](https://travis-ci.org/sadorlovsky/codestyle.svg)](https://travis-ci.org/sadorlovsky/codestyle)

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for my preferable code style.

**WORK IN PROGRESS**

## THE RULES OF FIGHT CLUB

  - **Two spaces**
  - **Single quotes**
  - **No semicolons**

## Nice code example

```javascript
// only ES2015
// space after function's name
export function hello (name = 'world') { // single quotes
  return `Hello, ${name}!` // two spaces for indent
} // no semicolons

// consts everywhere
export const fetchData = uri => { // no parens if single argument
  return fetch(uri)
    .then(res => res.json()) // arrow callback
    .then(data => { a: data.a, b: data.b })
    // spacing inside single-line blocks
}
// empty line at the end of code
```

## Install

```bash
npm install --save-dev @sadorlovsky/eslint-config
```

## Usage

Add this to your .eslintrc file:

```json
{
  "extends": "@sadorlovsky"
}
```
