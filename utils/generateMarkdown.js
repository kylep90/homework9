function generateMarkdown(data) {
  return `
# ${data.title}

##License
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description
${data.description}

## Installation
Command to install dependencies
${data.installation}

##Usage
${data.usage}

##Contributions
${data.contributing}

##Questions
You will be able to reach me at:
${data.questions}
Or by contacting me via by Github account:
${data.username}
`
  
}

module.exports = generateMarkdown;
