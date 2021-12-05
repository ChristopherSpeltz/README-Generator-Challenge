const inquirer = require('inquirer');
// const Choices = require('inquirer/lib/objects/choices');

// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('What is your name?');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "title",
            message: "What is the project title? (Required)",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('What is the project title?');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a project description:",
        },
        {
            type: "confirm",
            name: "confirmURL",
            message: "Does application have a URL?",
            default: false,
        },
        {
            type: "input",
            name: "applicationURL",
            message: "Please provide project URL:",
            when: ({ confirmURL }) => {
              if (confirmURL) {
                return true;
              } else {
                return false;
              }
            }
        },
        {
            type: "confirm",
            name: "confirmLicense",
            message: "Does project use a license?",
            default: false
        },
        {
            type: "checkbox",
            name: "license",
            message: "What license does your project use?",
            choices:["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0"],
            when: ({ confirmLicense }) => {
              if (confirmLicense) {
                return true;
              } else {
                return false;
              }
            }
        },
        {
            type: "type",
            name: "installationInstructions",
            message: "Please provided installation instructions:",
        },
        {
            type: "confirm",
            name: "confirmContributors",
            message: "Are there contributors to the project",
            default: false
        },
        {
            type: "type",
            name: "contributors",
            message: "Please provide contributors:",
            when: ({ confirmContributors }) => {
                if (confirmContributors) {
                  return true;
                } else {
                  return false;
                }
              }
        },
    ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
promptUser();

