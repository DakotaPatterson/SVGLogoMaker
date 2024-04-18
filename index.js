//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        name: 'license',
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
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

// Function call to initialize app
init();
