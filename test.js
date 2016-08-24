import test from 'ava';
import m from '.';

test('get all fonts', async t => {
  const fonts = await m.getAll();
  t.truthy(fonts.length);
});

test('get all user fonts', async t => {
  const fonts = await m.getAll('user');
  t.truthy(fonts.length);
});
