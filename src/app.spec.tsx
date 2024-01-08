import { helloWorld } from './app';

describe('App', () => {
    it('returns hello world', () => {
        expect(helloWorld()).toEqual('hello world');
    });
});
