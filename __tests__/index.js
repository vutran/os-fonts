import m from '../';

jest.mock('recursive-readdir');

describe('os-fonts', () => {
  // eslint-disable-next-line global-require
  const recursive = require('recursive-readdir');

  it('should retrieve some fonts', async () => {
    // set up mock data
    // eslint-disable-next-line no-underscore-dangle
    recursive.__setFiles([
      'foo.ttf',
      'bar.ttf',
    ]);
    const fonts = await m.getAll();
    expect(fonts.length).toBe(2);
  });

  it('should retrieve no fonts', async () => {
    // eslint-disable-next-line no-underscore-dangle
    recursive.__setFiles([]);
    const fonts = await m.getAll();
    expect(fonts.length).toBe(0);
  });

  it('should retrieve user fonts', async () => {
    // set up mock data
    // eslint-disable-next-line no-underscore-dangle
    recursive.__setFiles([]);
    const fonts = await m.getAll('user');
    expect(fonts.length).toBe(0);
  });

  it('should get all network fonts', async () => {
    // set up mock data
    // eslint-disable-next-line no-underscore-dangle
    recursive.__setFiles([
      'foo.ttf',
      'bar.ttf',
      'baz.ttf',
      'qux.ttf',
    ]);
    const fonts = await m.getAll('network');
    expect(fonts.length).toBe(4);
  });

  it('should return nothing for readdir errors', async () => {
    // eslint-disable-next-line no-underscore-dangle
    recursive.__setReturnError(true);
    const fonts = await m.getAll('network');
    expect(fonts.length).toBe(0);
  });
});
