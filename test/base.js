var test = require('tape')
var config = require('../index')

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}

test('parser options are ok', function (t) {
  t.ok(isObject(config.parserOptions))
  t.end()
})

test('env is ok', function (t) {
  t.ok(isObject(config.env))
  t.end()
})

test('globals are ok', function (t) {
  t.ok(isObject(config.globals))
  t.end()
})

test('rules are ok', function (t) {
  t.ok(isObject(config.rules))
  t.end()
})
