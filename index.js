// Import external Node JS modules and js file.
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// List of questions to prompt user to answer.
const questions = [
    "Enter your project title",
    "Enter a description",
    "Enter installation instructions",
    "Enter usage information",
    "Choose a license for your application",
    "Enter contribution guidelines",
    "Enter test instructions",
    "Enter your GitHub username",
    "Enter your email address"
];

// The writeToFile function creates README file.
function writeToFile (data) {
    fs.writeFile('README.md', data, (err) =>
        err ? console.error(err) : console.log('Success!'))
}

// The init function prompts user to enter information to be written on the README file.
function init () {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: questions[0]
            },
            {
                name: "description",
                type: "input",
                message: questions[1]
            },
            {
                name: "installation",
                type: "input",
                message: questions[2]
            },
            {
                name: "usage",
                type: "input",
                message: questions[3]
            },
            {
                name: "license",
                type: "list",
                message: questions[4],
                choices: [
                    "None",
                    "Apache license 2.0",
                    "GNU General Public License v3.0",
                    "MIT License",
                    "BSD 2-Clause \"Simplified\" License",
                    "BSD 3-Clause \"New\" or \"Revised\" License",
                    "Boost Software License 1.0",
                    "Creative Commons Zero v1.0 Universal",
                    "Eclipse Public License 2.0",
                    "GNU Affero General Public License v3.0",
                    "GNU General Public License v2.0",
                    "GNU Lesser General Public License v2.1",
                    "Mozilla Public License 2.0",
                    "The Unlicense"
                ]
            },
            {
                name: "contributing",
                type: "input",
                message: questions[5]
            },
            {
                name: "tests",
                type: "input",
                message: questions[6]
            },
            {
                name: "username",
                type: "input",
                message: questions[7]
            },
            {
                name: "email",
                type: "input",
                message: questions[8]
            },
        ])
        .then((response) => {
            const data = generateMarkdown(response);
            writeToFile(data);
        })
}

// Initialize the app in node.js.
init();
