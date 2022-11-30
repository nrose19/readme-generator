const inquirer = require('inquirer');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.projectTitle}

  # Table of Contents
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[contribution](#contribution)
  -[test](#test)
  -[license](#license)
  -[github](#gitHub)
  -[email](#emailAddress)

${data.licenses}
##Licenses:

${data.description}
##Description:

${data.installation}
##Installation Instructions:

${data.usage}
##Usage:

${data.contribution}
##Contribution:

${data.test}
##Test:

${response.gitHub}
##GitHub:

${response.emailAddress}
##Email:

`;
}

module.exports = generateMarkdown;
