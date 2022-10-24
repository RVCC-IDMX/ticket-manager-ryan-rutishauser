/* eslint-disable prefer-destructuring */
const chalk = require('chalk');

const log = console.log;

class EmailService {
  // eslint-disable-next-line class-methods-use-this
  send(email) {
    log(chalk.bold.white(`Sending email to ${email}`));
  }
}

module.exports = EmailService;
