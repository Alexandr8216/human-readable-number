const assert = require('assert');

const toReadable = require('./src');


it('Should return \'zero\' when 0 given', () => {
  const readable = toReadable(0);
  assert.equal(readable, 'zero');
}); 