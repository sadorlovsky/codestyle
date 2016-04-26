import test from 'ava'
import check from '../helpers/check'

test('async/await', t => {
  const code = `
import fetch from 'fetch'
export async function load () {
  await fetch('/feed')
}
`
  t.is(check(code).errors, 0)
})

test('decorator', t => {
  const code = `
import bind from 'bind'
@bind
export class Doge {}
`
  t.is(check(code).errors, 0)
})

test('jsx', t => {
  const code = `
export function hello (name) {
  return <div>Hello {name}</div>
}
`
  t.is(check(code).errors, 0)
})
