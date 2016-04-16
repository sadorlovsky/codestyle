import test from 'ava'
import { cli } from './_helper'

test('spaces between array brackets are bad', t => {
  const code = 'export const a = [ 1, 2, 3 ]\n'
  t.is(cli.executeOnText(code).errorCount, 2)
})

test('no spaces between array brackets is good', t => {
  const code = 'export const a = [1, 2, 3]\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('single element', t => {
  const code = 'export const a = [{}]\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('array of objects', t => {
  const code = 'export const a = [{}, {}]\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('spaces in array of objects', t => {
  const code = 'export const a = [ {}, {} ]\n'
  t.is(cli.executeOnText(code).errorCount, 2)
})

test('array of arrays', t => {
  const code = 'export const a = [[], []]\n'
  t.is(cli.executeOnText(code).errorCount, 2)
})

test('array of arrays', t => {
  const code = 'export const a = [ [], [] ]\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})
