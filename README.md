# os-fonts

[![Travis](https://img.shields.io/travis/vutran/os-fonts/master.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/vutran/os-fonts) [![Coveralls branch](https://img.shields.io/coveralls/vutran/os-fonts/master.svg?maxAge=2592000&style=flat-square)](https://coveralls.io/github/vutran/os-fonts) [![license](https://img.shields.io/github/license/vutran/os-fonts.svg?maxAge=2592000&style=flat-square)](LICENSE)

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

Returns a `Promise` with all paths to all fonts.

#### useType

Type: `String`

Default: `system`

Options: `user`, `local`, `network`, `system`

The use type.

### getAllSync([useType])

Returns paths to all fonts (synchronous version of `getAll`).

### getFontsInDirectory(dir)

Returns a `Promise` with paths to all fonts in the given directory.

#### dir

Type: `String`

The directory to read

### getFontsInDirectory(dir)

Returns paths to all fonts in the given directory (synchronous version of `getFontsInDirectory`).

## License

MIT © [Vu Tran](https://github.com/vutran/)
