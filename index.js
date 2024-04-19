//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

//Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What text would you like displayed? (This may be up to three characters)',
        name: 'text',
        validate: function(input) {
            if (input.trim() === '') {
                return "Please enter the text you would like displayed.";
            }
            return true;
        },
        validate: function(input) {
            if (input.trim().length > 3) {
                return "Please enter the text you would like displayed that is less than three characters.";
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What color would you like the text to be?',
        name: 'textColor',
        validate: function(input) {
            if (input.trim() === '') {
                return "Please enter the text color.";
            }
            return true;
        }
    },
    {
        type: 'list',
        message: 'What shape would you like the logo to be?',
        name: 'shapeType',
        choices: ['Square', 'Circle','Triangle'],
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'shapeColor',
        validate: function(input) {
            if (input.trim() === '') {
                return "Please enter a color for the shape.";
            }
            return true;
        }
    },
];

//Create a function to initialize app
const generateSVG = (answers) => {

    let shape;
    switch (answers.shapeType.toLowerCase()) {
        case 'square':
            shape = new Square(answers.shapeColor, answers.text);
            break;
        case 'circle':
            shape = new Circle(answers.shapeColor, answers.text);
            break;
        case 'triangle':
            shape = new Triangle(answers.shapeColor, answers.text);
            break;
        default:
            console.error("Invalid shape type.");
            return;
    }

 const svgContent = shape.generateSVG();
    fs.writeFileSync('logo.svg', svgContent);
    console.log("Generated logo.svg");
};

inquirer.prompt(questions)
    .then((answers) => {
        generateSVG(answers);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Function call to initialize app
generateSVG();
