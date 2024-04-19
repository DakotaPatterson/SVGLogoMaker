// triangle.test.js
const Triangle = require('../triangle');

describe('Triangle', () => {
    test('render() returns SVG markup with correct shape color', () => {
        const triangle = new Triangle('Test', 'red', 'yellow');
        const svgMarkup = triangle.render();
        expect(svgMarkup).toContain('<polygon');
        expect(svgMarkup).toContain('fill="yellow"');
    });
});