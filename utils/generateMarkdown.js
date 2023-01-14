// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {
  if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
  return `<!-- omit in toc -->
# ${data.title}

<!-- omit in toc -->
## Description
  ${data.description}

<!-- omit in toc -->
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#howtocontribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## How to Contribute
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions regarding this project, contact me through:
- GitHub: [https://github.com/${data.username}](https://github.com/${data.username})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
