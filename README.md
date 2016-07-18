# UUID4

Generator and validator for Universally Unique Identifier v4 (random).

## How to use

Install the library via NPM:

```shell
npm install @fczbkk/uuid4 --save
```

Then import to your Javascript:

```javascript
import {genrate, validate} from '@fczbkk/uuid4';

// generate UUID4 identifier
const my_id = generate();  // e.g. 4414b07a-d8ae-4763-a7e2-aa66cb0dc3d0

// validate UUID identifier
validate(my_id);  // true
validate('xxx');  // false
```

## Documentation

### validate

Checks if provided `id` is valid UUID4.

**Parameters**

-   `id` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

### generate

Generates new valid UUID4 identifier.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/fczbkk/uuid4/issues) or send me an e-mail at <a href="mailto:riki@fczbkk.com">riki@fczbkk.com</a>.

## License

UUID4 is published under the [MIT license](https://github.com/fczbkk/uuid4/blob/master/LICENSE).
