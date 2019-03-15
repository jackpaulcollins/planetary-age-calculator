import { add } from "./../src/backend.js"

describe('Test', function() {
  it('should add two numbers', function() {
    let isFour = add(2,2)
    expect(isFour).toEqual(4)
  });
});
