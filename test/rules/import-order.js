import test from 'ava'
import check from '../helpers/check'

test('good import order', t => {
  const code = `
import fs from 'fs'
import lodash from 'lodash'
console.log(fs)
console.log(lodash)
`
  t.is(check(code).errors, 0)
})

test('bad import order', t => {
  const code = `
import lodash from 'lodash'
import fs from 'fs'
console.log(fs)
console.log(lodash)
`
  t.is(check(code).errors, 1)
})
