const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const inquirer  = require('./lib/inquirer');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Array Rotate', { horizontalLayout: 'full' })
  )
);


const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  console.log(credentials);
};

run();