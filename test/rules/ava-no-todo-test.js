/*eslint ava/max-asserts: ["error", 2]*/
import test from 'ava'
import check from '../helpers/check'

test('todo - it\'s ok', t => {
  const code = `
import test from 'ava'
test.todo('test', t => {
  t.pass()
})
`
  t.is(check(code).errors, 0)
  t.is(check(code).warns, 1)
})
