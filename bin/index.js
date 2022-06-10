#!/usr/bin/env node

const { prompt } = require("enquirer");
const { exec } = require("child_process");
const chalk = require("chalk");
const boxen = require("boxen");

;(async () => {
    const response = await prompt([
        {
            type: "input",
            name: "repo",
            message: "Enter git repo url"
        },
        {
            type: "input",
            name: "commit",
            message: "Enter git first commit message",
        }
    ])

    exec(`git init`);
    exec(`git add .`);    
    exec(`git commit -m"${response.commit ? response.commit : "initial commit"}"`);    
    exec(`git remote add origin ${response.repo}`);
    exec(`git push -u origin master`);
    let succesText = boxen(chalk.greenBright("Your project succesfully inited."), {
        borderStyle: "bold",
        padding: 1,
        
    });
    console.log(succesText);
})()