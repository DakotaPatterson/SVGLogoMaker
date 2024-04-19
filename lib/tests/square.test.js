// square.test.js
const Square = require('../square');

describe('Square', () => {
    test('render() returns SVG markup with correct shape color', () => {
        const square = new Square('Tes', 'red', 'green');
        const svgMarkup = square.render();
        expect(svgMarkup).toContain('<rect');
        expect(svgMarkup).toContain('fill="green"');
    });
});