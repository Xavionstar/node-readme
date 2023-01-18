import inquirer from 'inquirer';

inquirer
  .prompt([{
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
    name: 'contribute',
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
    choices: ['MIT', 'Apache', 'GNU', "ISC"],
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
    console.log(answers)
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });