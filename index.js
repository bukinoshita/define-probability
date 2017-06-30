'use strict'

module.exports = entry => {
  if (entry.length <= 1) {
    throw new TypeError('Entry must have at least to entries')
  }

  const num = Math.random()
  const lastIndex = entry.length - 1
  let s = 0

  for (let i = 0; i < lastIndex; ++i) {
    s += entry[i].prob

    if (num < s) {
      return entry[i].value
    }
  }

  return entry[lastIndex].value
}
