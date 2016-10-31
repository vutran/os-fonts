import m from '../';

describe('os-fonts', () => {
  it('should get all fonts', async () => {
    const fonts = await m.getAll();
    expect(fonts.length).toBeTruthy();
  });

  it('should get all user fonts', async () => {
    const fonts = await m.getAll('user');
    expect(fonts.length).toBeTruthy();
  });
});
