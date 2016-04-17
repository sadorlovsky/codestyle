import test from 'ava'
import check from '../helpers/check'

test('good import order', t => {
  const code = `
/*eslint no-unused-vars: "off"*/
import fs from 'fs'
import lodash from 'lodash'
import lib from './lib'
`
  t.is(check(code).errors, 0)
})

test('bad import order', t => {
  const code = `
/*eslint no-unused-vars: "off"*/
import lib from './lib'
import lodash from 'lodash'
import fs from 'fs'
`
  t.is(check(code).errors, 2)
})
