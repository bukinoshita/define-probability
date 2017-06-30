# define-probability [![Build Status](https://travis-ci.org/bukinoshita/define-probability.svg?branch=master)](https://travis-ci.org/bukinoshita/define-probability)

> Define probability of getting results

Feel free to contribute and improve this lib.

## Install

```
$ npm install --save define-probability
```

## Usage
```js
const defineProbability = require('define-probability')

const probabilities = [
  { value: 'male', prob: .2 },
  { value: 'female', prob: .8 }
]

defineProbability(probabilities)
// => female
```

## API

### defineProbability(entry)

returns `value`.

#### entry

Type: `array`<br/>
Required

`Array` must have at least 2 entries and must have `value` and `prob` keys.<br/>
Where `value` is the value returned and prob the probabilities of getting this result. `value` is a number between 0 and 1.


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
