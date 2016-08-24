# os-fonts

> Retrieve fonts available on your OS.

## Install

```bash
$ npm install --save os-fonts
```

## Usage

```js
const osFonts = require('os-fonts');

osFonts.getAll().then(fonts => {
  // array of fonts...
  fonts.forEach(font => {
    console.log(font);
  });
})
```

## API

### getAll([useType])

Get all fonts.

#### useType

Type: `String`

Default: `system`

Options: `user`, `local`, `network`, `system`

The use type.

### getFontsInDirectory(dir)

Retrieve all font files in the given directory.

#### dir

Type: `String`

The directory to read

## License

MIT © [Vu Tran](https://github.com/vutran/)
