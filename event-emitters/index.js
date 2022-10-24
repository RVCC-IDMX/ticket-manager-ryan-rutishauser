/* eslint-disable prefer-destructuring */
const chalk = require('chalk');

const log = console.log;

const TicketManager = require('./ticketManager');
const EmailService = require('./emailService');
const DatabaseService = require('./databaseService');

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on('buy', (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.on('error', (error) => {
  console.error(chalk.bgWhite.green(`Gracefully handling our error: ${error}`));
});

log(chalk.bgGreen.cyan(`We have ${ticketManager.listenerCount('buy')} listener(s) for the buy event`));
log(`We have ${ticketManager.listenerCount('error')} listener(s) for the error event`);

const onBuy = () => {
  log('I will be removed soon\n\n');
};

ticketManager.on('buy', onBuy);

log(chalk.bgGray(`We added a new event listener bringing our total count for the buy event to: ${ticketManager.listenerCount('buy')}`));
ticketManager.buy('test@email', 20);

ticketManager.off('buy', onBuy);

log(`We now have: ${ticketManager.listenerCount('buy')} listener(s) for the buy event`);
ticketManager.buy('test@email', 20);

ticketManager.removeAllListeners('buy');
log(chalk.yellowBright(`We have ${ticketManager.listenerCount('buy')} listeners for the buy event`));
ticketManager.buy('test@email', 20);
log('The last ticket was bought');
