import test from 'ava'
import check from '../helpers/check'

test('block-spacing is good', t => {
  const code = 'export function foo () { return true }\n'
  t.is(check(code).errors, 0)
})

test('no block-spacing is bad', t => {
  const code = 'export function foo () {return true}\n'
  t.is(check(code).errors, 2)
})
