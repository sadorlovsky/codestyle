import test from 'ava'
import isPlainObj from 'is-plain-obj'
import config from '../index'

test('parser', t => {
  t.true(isPlainObj(config.parserOptions))
})

test('env', t => {
  t.true(isPlainObj(config.env))
})

test('globals', t => {
  t.true(isPlainObj(config.globals))
})

test('rules', t => {
  t.true(isPlainObj(config.rules))
})
