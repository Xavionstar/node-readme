import inquirer from 'inquirer';
import fs from 'fs';



inquirer
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

        /* Pass your questions in here */
    ])
    .then((answers) => {
        createReadmePage(answers)
        console.log(answers)
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error)
            // Prompt couldn't be rendered in the current environment
        } else {
            console.log(error)
            // Something else went wrong
        }
    });

function createReadmePage(answers) {
    const fd = fs.openSync("readme-output/README.md", "w");
    createTitle(fd, answers.title)
    createTableContents(fd)
    createDescription(fd, answers.description)
    createInstallation(fd, answers.installation)
    createUsage(fd, answers.usage)
    createContribution(fd, answers.contribution)
    createLicense(fd, answers.licenses)
    createQuestion(fd, answers.githubQuestion, answers.emailQuestion)
    fs.closeSync(fd)
};

function createTitle(fd, title) {
    fs.writeSync(fd, `# ${title}\n\n`)
}

function createTableContents(fd) {
    fs.writeSync(fd, "## Table of Contents \n")
    fs.writeSync(fd, "* [Description](#description)\n")
    fs.writeSync(fd, "* [Installation Instructions](#installation-instructions)\n")
    fs.writeSync(fd, "* [Usage Information](#usage-information)\n")
    fs.writeSync(fd, "* [Contribution Guidelines](#contribution-guidelines)\n")
    fs.writeSync(fd, "* [Test Instructions](#test-instructions)\n")
    fs.writeSync(fd, "* [How to Reach Me With Questions](#how-to-reach-me-with-questions)\n")
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

function createQuestion(fd, githubQuestion, emailQuestion) {
    fs.writeSync(fd, '## How to Reach Me With Questions \n\n')
    fs.writeSync(fd, `${githubQuestion}\n\n`)
    fs.writeSync(fd, `[https://www.github.com/${githubQuestion}](https://www.github.com/${githubQuestion})\n\n`)
    fs.writeSync(fd, `${emailQuestion}\n\n`)
    fs.writeSync(fd, "You can reach me at either above links with questions about this project.")
}
