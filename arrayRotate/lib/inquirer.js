const inquirer = require('inquirer');

var x = function (arr, input) {
  input -= arr.length * Math.floor(input / arr.length);
  arr.push.apply(arr, arr.splice(0, input));
  return arr;
}

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: 'number',
        type: 'input',
        message: 'Enter Number:',
        validate: function( value ) {
          if(!isNaN(value)){
            var arr = [9,10,11,12,13,14,15];
            return x(arr, value);
          }else {
            return 'Please enter number.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};