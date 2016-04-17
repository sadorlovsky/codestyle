import test from 'ava'
import check from '../helpers/check'

test('set without get is bad', t => {
  const code = `
  export const o = {
    set a(value) {
      this.value = value
    }
  }
`
  t.is(check(code).errors, 1)
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
  t.is(check(code).errors, 0)
})

test('get without set is good', t => {
  const code = `
  export const o = {
    get a () {
      return this.value
    }
  }
`
  t.is(check(code).errors, 0)
})
