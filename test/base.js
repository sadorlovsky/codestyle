import test from 'ava'
import config from '../index'

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}

test('parser options are ok', t => {
  t.ok(isObject(config.parserOptions))
})

test('env is ok', t => {
  t.ok(isObject(config.env))
})

test('globals are ok', t => {
  t.ok(isObject(config.globals))
})

test('rules are ok', t => {
  t.ok(isObject(config.rules))
})
