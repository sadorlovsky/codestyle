import test from 'ava'
import { cli } from './_helper'

test('set without get is bad', t => {
  const code = `
  export const o = {
    set a(value) {
      this.value = value
    }
  }
`
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('set with get is good', t => {
  const code = `
  export const o = {
    get a () {
      return this.value
    },
    set a (value) {
      this.value = value
    }
  }
`
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('get without set is good', t => {
  const code = `
  export const o = {
    get a () {
      return this.value
    }
  }
`
  t.is(cli.executeOnText(code).errorCount, 0)
})
