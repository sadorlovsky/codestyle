/* eslint import/no-extraneous-dependencies: "off" */
/* eslint import/no-unresolved: "off" */

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
