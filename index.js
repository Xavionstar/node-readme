import inquirer from 'inquirer';
import fs from 'fs';



inquirer
//I added each of the questions for each section info
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Type a description of your project.',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'How is this project installed?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this project used?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can other developers contribute?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are your test instructions?',
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'Is this for delivery?',
            choices: ["MIT", 'Apache', 'GNU', "ISC"],
        },
        {
            type: 'input',
            name: 'githubQuestion',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'emailQuestion',
            message: 'What is your email?',
        },

        
    ])
    //the create page method is the final large method that collects all the smaller functions
    .then((answers) => {
        createReadmePage(answers)
        console.log(answers)
        
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error)
            
        } else {
            console.log(error)
            
        }
    });
//I wanted to create a cleaner code by using multiple methods and then making one larger method that calls the smaller ones
function createReadmePage(answers) {
    const fd = fs.openSync("readme-output/README.md", "w");
    createTitle(fd, answers.title)
    createDescription(fd, answers.description)
    createTableContents(fd)
    createInstallation(fd, answers.installation)
    createUsage(fd, answers.usage)
    createContribution(fd, answers.contribution)
    createLicense(fd, answers.licenses)
    createTest(fd, answers.test)
    createQuestion(fd, answers.githubQuestion, answers.emailQuestion)
    fs.closeSync(fd)
};

//each of these is a smaller method that makes a section that has the heading and the information from the corresponding question
function createTitle(fd, title) {
    fs.writeSync(fd, `# ${title}\n\n`)
}
//the table of contents works basically like a link but with unique syntax for markdown
function createTableContents(fd) {
    fs.writeSync(fd, "## Table of Contents \n")
    fs.writeSync(fd, "* [Description](#description)\n")
    fs.writeSync(fd, "* [Installation Instructions](#installation-instructions)\n")
    fs.writeSync(fd, "* [Usage Information](#usage-information)\n")
    fs.writeSync(fd, "* [Contribution Guidelines](#contribution-guidelines)\n")
    fs.writeSync(fd, "* [Test Instructions](#test-instructions)\n")
    fs.writeSync(fd, "* [How to Reach Me With Questions](#how-to-reach-me-with-questions)\n\n")
}

function createDescription(fd, description) {
    fs.writeSync(fd, "## Description \n\n")
    fs.writeSync(fd, `${description}\n\n`)
}

function createInstallation(fd, installation) {
    fs.writeSync(fd, '## Installation Instructions \n\n')
    fs.writeSync(fd, `${installation}\n\n`)
}

function createUsage(fd, usage) {
    fs.writeSync(fd, "## Usage Information \n\n")
    fs.writeSync(fd, `${usage}\n\n`)
}

function createContribution(fd, contribution) {
    fs.writeSync(fd, "## Contribution Guidelines \n\n")
    fs.writeSync(fd, `${contribution}\n\n`)
}

function createTest(fd, test) {
    fs.writeSync(fd, '## Test Instructions \n\n')
    fs.writeSync(fd, `${test}\n\n`)
}
//This was a tricky one because it was a list instead of input. I ended up writing the if/else if functions to write different license sections based on choice
function createLicense(fd, licenses) {
    console.log(licenses)
    if (licenses === "MIT") {
        fs.writeSync(fd, "## MIT License \n\n")
        fs.writeSync(fd, "This project is covered under the MIT License. For more information click the link below \n")
        fs.writeSync(fd, "https://spdx.org/licenses/MIT.html\n\n")
    } else if (licenses === "Apache") {
        fs.writeSync(fd, "## Apache Lincense \n\n")
        fs.writeSync(fd, "This project is covered under the Apache License. For more information click link below \n")
        fs.writeSync(fd, "https://spdx.org/licenses/Apache-2.0.html\n\n")
    } else if (licenses === "GNU") {
        fs.writeSync(fd, "## GNU Lincense \n\n")
        fs.writeSync(fd, "This project is covered under the GNU License. For more information click link below \n")
        fs.writeSync(fd, "https://www.gnu.org/licenses/gpl-3.0.html\n\n")
    } else if (licenses === "ISC") {
        fs.writeSync(fd, "## ISC Lincense \n\n")
        fs.writeSync(fd, "This project is covered under the ISC License. For more information click link below \n")
        fs.writeSync(fd, "https://spdx.org/licenses/ISC.html\n\n")
    }
}
//this one was a little tricky also because it was 2 answers in one section but i figured it out by just passing both questions into the function
function createQuestion(fd, githubQuestion, emailQuestion) {
    fs.writeSync(fd, '## How to Reach Me With Questions \n\n')
    fs.writeSync(fd, `${githubQuestion}\n\n`)
    fs.writeSync(fd, `[https://www.github.com/${githubQuestion}](https://www.github.com/${githubQuestion})\n\n`)
    fs.writeSync(fd, `${emailQuestion}\n\n`)
    fs.writeSync(fd, "You can reach me at either above links with questions about this project.")
}
