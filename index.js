// Modules imported
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generate-markdown');
const writeReadme = require('./utils/generate-readme');

// Questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project (required)?',
    validate: (projectNameInput) => {
      if (projectNameInput) {
        return true;
      } else {
        console.log('Please enter the name of your project!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project (required).',
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a description of your project!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'installation',
    message:
      'What are the installation requirements for your project (required)?',
    validate: (instructionInput) => {
      if (instructionInput) {
        return true;
      } else {
        console.log(
          'Please enter the installation instructions for your project!'
        );
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'installationCommands',
    message:
      'What commands can the user input to download the required dependencies for your application?',
    default: 'npm install inquirer',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use (required).',
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please provide instructions on how to use your project!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Describe how people may contribute to this project (required).',
    validate: (contributingInput) => {
      if (contributingInput) {
        return true;
      } else {
        console.log(
          'Please describe how people may contribute to your project!'
        );
        return false;
      }
    },
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project (required).',
    choices: ['MIT', 'Apache', 'GPL', 'No License'],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log('Please choose a license for your project!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'userName',
    message: 'What is your Github username (required)?',
    validate: (usernameInput) => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter your Github usersname!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message:
      'Please enter an email for people to contact you with questions, concerns and feedback (required).',
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter a contact email!');
        return false;
      }
    },
  },
];

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((readmeData) => generateMarkdown(readmeData))
    .then((readmeText) => writeReadme(readmeText))
    .then((writeReadmeResponse) => console.log(writeReadmeResponse))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
