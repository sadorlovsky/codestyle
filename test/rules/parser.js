import test from 'ava'
import check from '../helpers/check'

test('async/await', t => {
  const code = 'export async function load () {\n  await fetch(\'/feed\')\n}\n'
  t.is(check(code).errors, 0)
})

test('decorator', t => {
  const code = '@bind\nexport class Doge {\n\n}\n'
  t.is(check(code).errors, 0)
})
