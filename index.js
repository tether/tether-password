/**
 * Dependencies
 */

const sodium = require('sodium-universal')
const alloc = require('buffer-alloc')


/**
 * Hash password or verify password against a buffer encoded
 * with argon2 algorithm.
 *
 * @param {String} password (password to hash or to verify)
 * @param {Buffer?} stored
 * @return {Buffer} (or null othwise)
 * @api public
 */

module.exports = function (pass, stored) {
  if (stored) {
    const bool = sodium.crypto_pwhash_str_verify(stored, new Buffer(pass))
    return bool && stored
  } else {
    var output = alloc(sodium.crypto_pwhash_STRBYTES)
    sodium.crypto_pwhash_str(
      output,
      new Buffer(pass),
      sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
      sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
    )
    return output
  }
}
