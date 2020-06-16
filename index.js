
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");

const generateMarkDown = require ("./utils/generateMarkdown")

const questions = 
  [
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
    {
        type: "checkbox", //user is able to make multiple choices from the given list
        name: "tableOfContents",
        message: "What should your Table of Contents include?",
        choices: ["Installation", "Usage", "License","Contributing", "Tests", "Questions"]
      },
    {
      type: "input",
      name: "installation",
      message: "What commands should someone run to install your project?",
      default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "How and why would someone use this project?"
      },
    {
      type: "list", 
      name: "license",
      message: "What is the project license?",
      choices: ["MIT", "BSD 3", "NONE"]
    },
    {
        type: "input",
        name: "contributing",
        message: "How can someone contribute to this project?" // e.g. donations
      },

    {
      type: "input",
      name: "tests",
      message: "What commands are used in order to run the tests?"
    },
    {
      type: "input",
      name: "questions",
      message: "If you have any questions, you will be able to reach me at:  " //github user
    },
];

function generateReadMe(fileName, data){
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function promptUser(){
  inquirer.prompt(questions)
  .then(function(response){
    console.log("Generating ReadMe file.")
    generateReadMe("README.md", generateMarkDown({...response}));
  })
}

promptUser();