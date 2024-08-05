// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  if (answers.license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } if (answers.license === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else {
    return `No license`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  if (answers.license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`
  } if (answers.license === 'Apache License 2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  return `${renderLicenseBadge(answers)+renderLicenseLink(answers)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}

## Application Description
${answers.description}

## Table of Contents:
- [Installation](##installation)
- [Interaction](##interaction)
- [Contributions](##contributions)
- [Testing](##testing)
- [License](##license)
- [Questions](##questions)

## Installation
${answers.install}

## Interaction
${answers.interact}

## Contributions
${answers.contributions}

## Testing
${answers.tests}

## License
${renderLicenseSection(answers)}

## Questions
- [Email me here!](mailto:${answers.email})
- [My GitHub Profile](https://www.github.com/${answers.github})
`;
}

module.exports = generateMarkdown;
