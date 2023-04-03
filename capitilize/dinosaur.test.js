// dependency injection / importing
const dinosaur = require('./dinosaur.js');

describe('As a User I want a way to capitalize my strings', () => {

  // our unit test
  test('Should capitalize a string', () => {
    let output = dinosaur('jacob');
    expect(output).toEqual('JACOB');
  });
});