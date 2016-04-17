import test from 'ava'
import check from '../helpers/check'

test('spaces between array brackets are bad', t => {
  const code = 'export const a = [ 1, 2, 3 ]\n'
  t.is(check(code).errors, 2)
})

test('no spaces between array brackets is good', t => {
  const code = 'export const a = [1, 2, 3]\n'
  t.is(check(code).errors, 0)
})

test('no spaces in array of single element', t => {
  const code = 'export const a = [{}]\n'
  t.is(check(code).errors, 0)
})

test('np spaces in array of objects', t => {
  const code = 'export const a = [{}, {}]\n'
  t.is(check(code).errors, 0)
})

test('spaces in array of objects', t => {
  const code = 'export const a = [ {}, {} ]\n'
  t.is(check(code).errors, 2)
})

test('no spaces in array of arrays', t => {
  const code = 'export const a = [[], []]\n'
  t.is(check(code).errors, 2)
})

test('spaces in array of arrays', t => {
  const code = 'export const a = [ [], [] ]\n'
  t.is(check(code).errors, 0)
})
