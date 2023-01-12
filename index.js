// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    // Question to generate the title
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project',
        validate: titleInput => {
            if(titleInput){
                return true;
            } else {
                console.log('Please enter a title!'):
                return false; 
            }
        }
    },

    {
      type: 'input',
      name: 'description', 
      message: 'Breifly describe your application',
      validate: descriptionInput => {
        if(descriptionInput){
            return true;
         } else {
            console.log('Please enter a description!'):
            return false; 
         }
        }
    },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})

// Function call to initialize app
init();
