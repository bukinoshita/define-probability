'use strict'

import test from 'ava'
import m from './'

test(t => {
  const error = t.throws(() => m([0]))
  const probabilities = [
    { value: 'male', prob: 0 },
    { value: 'female', prob: 1 }
  ]

  t.is(m(probabilities), 'female')
  t.is(error.message, 'Entry must have at least to entries')
})
