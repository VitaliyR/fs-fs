# fs-fs

Yet another NodeJS fs wrapper for Promises or/and async/await. Based on Proxy on top 
of original fs lib. Also, each method has it's linked *original* version.

## Usage

```js
const fs = require('fs-fs');

try {
const data = await fs.readFile('path');  
} catch (e) {
}

const isExists = await fs.exists('path');

fs
  .readFile('path')
  .then(Function.prototype)
  .catch(Function.prototype);

fs.native.readFile('path', Function.prototype /* callback */);
```

## License

MIT © 2017 [Vitaliy Ribachenko](https://ribachenko.com) <vit@ribachenko.com>
