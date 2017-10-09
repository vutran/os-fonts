import m from '../';

jest.mock('recursive-readdir');
jest.mock('recursive-readdir-sync');

describe('os-fonts', () => {
    describe('async', () => {
        const recursive = require('recursive-readdir');
        it('should retrieve some fonts', async () => {
            // set up mock data
            recursive.__setFiles(['foo.ttf', 'bar.ttf']);
            const fonts = await m.getAll();
            expect(fonts.length).toBe(2);
        });

        it('should retrieve no fonts', async () => {
            recursive.__setFiles([]);
            const fonts = await m.getAll();
            expect(fonts.length).toBe(0);
        });

        it('should retrieve user fonts', async () => {
            // set up mock data
            recursive.__setFiles([]);
            const fonts = await m.getAll('user');
            expect(fonts.length).toBe(0);
        });

        it('should get all network fonts', async () => {
            // set up mock data
            recursive.__setFiles(['foo.ttf', 'bar.ttf', 'baz.ttf', 'qux.ttf']);
            const fonts = await m.getAll('network');
            expect(fonts.length).toBe(4);
        });

        it('should return nothing for readdir errors', async () => {
            recursive.__setReturnError(true);
            const fonts = await m.getAll('network');
            expect(fonts.length).toBe(0);
        });
    });

    describe('sync', () => {
        const recursiveSync = require('recursive-readdir-sync');
        it('should retrieve some fonts', async () => {
            // set up mock data
            recursiveSync.__setFiles(['foo.ttf', 'bar.ttf']);
            const fonts = await m.getAllSync();
            expect(fonts.length).toBe(2);
        });

        it('should retrieve no fonts', async () => {
            recursiveSync.__setFiles([]);
            const fonts = await m.getAllSync();
            expect(fonts.length).toBe(0);
        });

        it('should retrieve user fonts', async () => {
            // set up mock data
            recursiveSync.__setFiles([]);
            const fonts = await m.getAllSync('user');
            expect(fonts.length).toBe(0);
        });

        it('should get all network fonts', async () => {
            // set up mock data
            recursiveSync.__setFiles([
                'foo.ttf',
                'bar.ttf',
                'baz.ttf',
                'qux.ttf',
            ]);
            const fonts = await m.getAllSync('network');
            expect(fonts.length).toBe(4);
        });

        it('should return nothing for readdir errors', async () => {
            recursiveSync.__setReturnError(true);
            const fonts = await m.getAllSync('network');
            expect(fonts.length).toBe(0);
        });
    });
});
