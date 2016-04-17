import test from 'ava'
import check from '../helpers/check'

test('avoid assignment in conditional statements is good', t => {
  const code = 'const x = 5\nif (x === 5) {}\nconsole.log(x)\n'
  t.is(check(code).errors, 0)
})

test('assignment in conditional statements is bad', t => {
  const code = 'let x = 5\nif (x = 0) {}\nconsole.log(x)\n'
  t.is(check(code).errors, 1)
})
