import test from 'ava'
import config from '../index'

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}

test('parser options are ok', t => {
  t.truthy(isObject(config.parserOptions))
})

test('env is ok', t => {
  t.truthy(isObject(config.env))
})

test('globals are ok', t => {
  t.truthy(isObject(config.globals))
})

test('rules are ok', t => {
  t.truthy(isObject(config.rules))
})
