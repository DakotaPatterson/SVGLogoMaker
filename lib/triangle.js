const Shape = require('./shapes');

// Triangle class inherits from Shape

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 200,190 10,190" fill="${this.shapeColor}"/>
                <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}

module.exports = Triangle;