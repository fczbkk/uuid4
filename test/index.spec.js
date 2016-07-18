import {generate, validate} from './../src/index';


describe('UUID4', function () {

  it('should generate and validate', function () {
    for (let i = 0; i < 1000; i++) {
      expect(validate(generate())).toEqual(true);
    }
  });

});
