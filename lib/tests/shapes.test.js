// shapes.test.js
const Shape = require('../shapes');

describe('Shape', () => {
    test('render() throws error when called directly', () => {
        const shape = new Shape('Tes', 'red', 'blue');
        expect(() => {
            shape.render();
        }).toThrow('render method must be implemented by child classes');
    });
});