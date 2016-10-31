import m from '../';

jest.mock('fs');

describe('os-fonts', () => {
  const fs = require('fs');

  it('should retrieve some fonts', async () => {
    // set up mock data
    fs.__setFiles([
      'foo.ttf',
      'bar.ttf',
    ]);
    const fonts = await m.getAll();
    expect(fonts.length).toBe(2);
  });

  it('should retrieve no fonts', async () => {
    fs.__setFiles([]);
    const fonts = await m.getAll();
    expect(fonts.length).toBe(0);
  });

  it('should retrieve user fonts', async () => {
    // set up mock data
    fs.__setFiles([]);
    const fonts = await m.getAll('user');
    expect(fonts.length).toBe(0);
  });

  it('should get all network fonts', async () => {
    // set up mock data
    fs.__setFiles([
      'foo.ttf',
      'bar.ttf',
      'baz.ttf',
      'qux.ttf',
    ]);
    const fonts = await m.getAll('network');
    expect(fonts.length).toBe(4);
  });

  it('should return nothing for readdir errors', async () => {
    fs.__setReturnError(true);
    const fonts = await m.getAll('network');
    expect(fonts.length).toBe(0);
  });
});
