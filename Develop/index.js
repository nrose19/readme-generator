// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
// Project Title
    {
        type: 'input',
        message: 'Enter Project Title: ',
        name: 'projectTitle',
    },
// Description
    {
        type: 'input',
        message: 'Write a short description of your project:',
        name: 'description',
    },
// Installation Instructions
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
// Usage Information
    {
        type: 'input',
        message: 'Provide instructions and examples for use: ',
        name: 'usage',
    },
// Contribution Guidelines 
    {
        type: 'input',
        message: 'List contributors: ',
        name: 'contribution',
    },
// Test Instructions
    {
        type: 'input',
        message: 'Provide test instructions: ',
        name: 'testIntructions',
    },
// Liscences
    {
        type: 'list',
        message: 'Which liscense would you like for this project?',
        choices: [
            'Apache',
            'Boost',
            'BSD',
            'Creative Commons',
            'Eclipse',
            'GNU',
            'IBM',
            'MIT',
            'ISC',
            'Mozilla',
            'SIL',
        ],
        name: 'liscense',
    },
// Github 
    {
        type: 'input',
        message: 'Enter your GitHub username: ',
        name: 'gitHub',
    },
// Email address
    {
        type: 'input',
        message: 'Enter your email Address: ',
        name: 'emailAddress',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
