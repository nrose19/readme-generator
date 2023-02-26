const inquirer = require('inquirer');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  } else if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]";
  } else if (license === "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "BSD") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "Boost") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "GNU") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "Mozilla") {
    return "(https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (liscense) {

  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.projectTitle}

  ---
  # Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Test](#test)
  -[License](#license)
  -[Github](#gitHub)
  -[Email](#emailAddress)

---
## Description:
${data.description}

---
## Installation Instructions:
${data.installation}

---
## Usage:
${data.usage}

---
## Contribution:
${data.contribution}

---
## Licenses:
${data.licenses}

---
## Test:
${data.test}

---
## Contact Information:
* GitHub: ${data.gitHub}
* Email: ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
