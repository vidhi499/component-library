
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./comp-lib.cjs.production.min.js')
} else {
  module.exports = require('./comp-lib.cjs.development.js')
}
