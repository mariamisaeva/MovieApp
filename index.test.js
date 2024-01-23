
const { fetchData, sum } = require('./app/index');
//global.window = {
//  addEventListener: jest.fn(),
//};


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


describe('fetchData function', () => {
    it('should return a promise', () => {
        const promise = fetchData('');
        expect(promise).toBeInstanceOf(Promise);

    });



});