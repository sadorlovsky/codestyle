import test from 'ava'
import { cli } from './_helper'

test('arrow-spacing before and after is good', t => {
  const code = 'export const foo = () => {}\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('arrow-spacing only after is bad', t => {
  const code = 'export const foo = ()=> {}\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('arrow-spacing only before is bad', t => {
  const code = 'export const foo = () =>{}\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('no arrow-spacing both before and after is bad', t => {
  const code = 'export const foo = ()=>{}\n'
  t.is(cli.executeOnText(code).errorCount, 2)
})
