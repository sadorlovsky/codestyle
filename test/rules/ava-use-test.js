import test from 'ava'
import check from '../helpers/check'

test('import ava as test is good', t => {
  const code = `
/*eslint no-unused-vars: "off"*/
import test from 'ava'
`
  t.is(check(code).errors, 0)
})

test('import ava not as test is bad', t => {
  const code = `
/*eslint no-unused-vars: "off"*/
import ava from 'ava'
`
  t.is(check(code).errors, 1)
})
