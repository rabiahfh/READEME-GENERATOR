// ## Acceptance Criteria

// ```md
// -THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions= [
    {   
        //project title
        type: "input",
        message: "What is the name of the project?",
        name: "title"
    },
    {  type: "input",
    message: "Please provide a description of the project",
    name: "description"
},
    { 
        //  Installation
         type: "input",
        message: "What is the installation process?",
        name: "installation"
    },
    {  
        // Usage 
        type: "input",
        message: "How will this project be used?",
        name: "usage"
    },
   
    {    // list of contributors
        type: "input",
        message: "Who were the contributors to this project?",
        name: "contribution"
    },
    {    
        // Tests
        type: "input" ,
        message: "What is the test process for this project?",
        name: "test"
    },
    {   
        // list of license
        type: "list",
        message: "What licenses are required with this project?",
        name: "license",
        choices: ['The MIT license', 'The GPL license', 'Apache license 2.0', 'The GNU license']
    },
    // {  
    //       // user name 
    //     type: "input",
    //     message: "What is the name of the user?",
    //     name: "userName"
    // },
    {     // github address
          type: "input",
        message: "What is the github user name?",
        name: "userName"
    },
    {     // email address
        type: "input",
      message: "What is the user email address?",
      name: "Email"
  }
]
    function writeToFile(fileName,data)  {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      })  
    }

// TODO: Create a function to initialize app
function init() {
    inquirer
      /* Pass your questions in here */
    .prompt(questions)
    .then(answers => {
      // Use user feedback for... whatever!!
         writeToFile("README.md",answers)

    });
    
    // .catch(error => {
    //   if(error.isTtyError) {
    //     // Prompt couldn't be rendered in the current environment
    //   } else {
    //     // Something else when wrong
    //   }
    // });

}

// Function call to initialize app
init();
