/*eslint ava/max-asserts: ["error", 2]*/
import test from 'ava'
import check from '../helpers/check'

test('only - it\'s ok', t => {
  const code = `
import test from 'ava'
test.only('test', t => {
  t.is(1, 1)
})
`
  t.is(check(code).errors, 0)
  t.is(check(code).warns, 1)
})
