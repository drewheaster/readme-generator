// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Write a description for your project: ',
    'How do you install the program?',
    'Describe how to use/interact with your application: ',
    'What are the contribution guidelines for your project?',
    'How can a user run tests on your application?',
    'Select a license for your project: ',
    'What is your GitHub username?',
    'What is your email?',
];

const licenseChoices = [
    'No License',
    'MIT',
    'Apache License 2.0',
]

// TODO: Create a function to write README file
function writeToFile(answers) {

    const pageContent = generateMarkdown(answers);

    fs.writeFile('README.md', pageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
      );

};

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'install',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'interact',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'contributions',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[5],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[6],
                choices: licenseChoices,
            },
            {
                type: 'input',
                name: 'github',
                message: questions[7],
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
            }
        ])
        .then((answers) => {
            writeToFile(answers);
        })
}

// Function call to initialize app
init();
