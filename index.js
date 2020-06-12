// const questions = [


// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your Github username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
      },
    {
      type: "input",
      name: "description",
      message: "What is the project description?"
    },
  //   {
  //       type: "list",
  //       name: "tableOfContents",
  //       message: "What should your Table of Contents include?",
  //       choices: ["Title","Description","Table of Contents",]
  // // * Installation
  // // * Usage
  // // * License
  // // * Contributing
  // // * Tests
  // // * Questions"]
  //     },
    // {
    //   type: "input",
    //   name: "installation",
    //   message: "What installations does your project need?"
    // },
    // {
    //     type: "input",
    //     name: "usage",
    //     message: "What is the project usage?"
    //   },
    // {
    //   type: "list",
    //   name: "license",
    //   message: "What is the project license?"
    // },
    // {
    //     type: "input",
    //     name: "contributing",
    //     message: "Who has ?"
    //   },

    // {
    //   type: "input",
    //   name: "tests",
    //   message: "What are the project's tests?"
    // },
    // {
    //   type: "input",
    //   name: "questions",
    //   message: "What are the project's questions?"
    // },
]);
}

function generateReadMe(response){
    return `# ${response.title}
${response.description}
Foobar is a Python library for dealing with word pluralization.
https://img.shields.io/badge/license-MIT-blue.svg
## Installation
[MIT](https://choosealicense.com/licenses/mit/)
Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.`
//    return `# ${response.title}

//     Your description is as follows  ${response.description}`;
    
    // ## Installation
    
    // Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.
    
    // ```bash
    // pip install foobar
    // ```
    
    // ## Usage
    
    // ```python
    // import foobar
    
    // foobar.pluralize('word') # returns 'words'
    // foobar.pluralize('goose') # returns 'geese'
    // foobar.singularize('phenomena') # returns 'phenomenon'
    // ```
    
    // ## Contributing
    // Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
    
    // Please make sure to update tests as appropriate.
    
    // ## License
    // [MIT](https://choosealicense.com/licenses/mit/)`

}

promptUser()
  .then(function(response) {
    const readMe = generateReadMe(response);
    console.log(response.title);
    console.log(generateReadMe(response));
    console.log(readMe);

    return writeFileAsync("README.md", readMe);
  })
  .then(function() {
    console.log("Successfully created your ReadMe");
  })
  .catch(function(err) {
    console.log(err);
  });