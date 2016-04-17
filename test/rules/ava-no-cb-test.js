import test from 'ava'
import check from '../helpers/check'

test('test.cb() is bad', t => {
  const code = `
import test from 'ava'
test.cb('bad test', t => {
  t.pass()
  t.end()
})
`
  t.is(check(code).errors, 1)
})
