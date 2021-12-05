const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // project title
    return  `# ${data.title}


## Description
${data.description}


## Application Link
${data.applicationURL}


## Table of Contents
${data.applicationURL}


## Installation Instructions
${data.installationInstructions}


## Usage
${data.usage}


## Tests
${data.test}


## Contributors
${data.test}

// questions section should include link to github profile and email contact
## Get In Touch
Please feel free to email any questions to ${data.email}
* GitHub : https://github.com/${data.username}

## License
${data.license}`
;
}



module.exports = generateMarkdown;