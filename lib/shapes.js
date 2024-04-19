// Shape class
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    // This method will be overridden by child classes
    render() {
        // This is a placeholder method to be overridden by child classes
        throw new Error('generateSVG method must be implemented by child classes');
    }
}

module.exports = Shape;