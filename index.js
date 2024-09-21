// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Project Title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation Instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage Information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Contribution Guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Test Instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Github Username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();