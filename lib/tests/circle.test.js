const Circle = require('../circle');

describe('Circle', () => {
    test('render() returns SVG markup with correct shape color', () => {
        const circle = new Circle('Tes', 'red', 'blue');
        const svgMarkup = circle.render();
        expect(svgMarkup).toContain('<circle');
        expect(svgMarkup).toContain('fill="blue"');
    });
});