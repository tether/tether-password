/**
 * Dependencies
 */

const sodium = require('sodium-universal')
const alloc = require('buffer-alloc')


/**
 * This is a simple description.
 *
 * @api public
 */

module.exports = function (pass) {
  var output = alloc(sodium.crypto_pwhash_STRBYTES)
  sodium.crypto_pwhash_str(
    output,
    new Buffer(pass),
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  )
  return output
}