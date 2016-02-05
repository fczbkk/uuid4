const UUID4 = require('./../src/index.js');


describe('UUID4', function () {

  it('should exist', function () {
    expect(UUID4).toBeDefined();
  });

  it('should generate and validate', function () {
    for (let i = 0; i < 1000; i++) {
      const id = UUID4.generate();
      expect(UUID4.validate(id)).toEqual(true);
    }
  });

});
