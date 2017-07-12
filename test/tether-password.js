
/**
 * Test dependencies.
 */

const test = require('tape')
const alloc = require('buffer-alloc')
const password = require('..')


test('should generate buffer from string password', assert => {
  assert.plan(1)
  assert.equal(password('hello world') instanceof Buffer, true)
})


test('should not be blank', assert => {
  assert.plan(1)
  const hash = password('hello world')
  assert.notEqual(hash, alloc(hash.length), 'not blank')
})
