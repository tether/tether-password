
/**
 * Test dependencies.
 */

const test = require('tape')
const password = require('..')


test('should generate buffer from string password', assert => {
  assert.plan(1)
  assert.equal(password('hello world') instanceof Buffer, true)
})
