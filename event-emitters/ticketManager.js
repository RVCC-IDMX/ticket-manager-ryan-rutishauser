/* eslint-disable prefer-destructuring */
/* eslint-disable indent */
const chalk = require('chalk');

const log = console.log;

const EventEmitter = require('events');

class TicketManager extends EventEmitter {
    constructor(supply) {
        super();
        this.supply = supply;
    }

    buy(email, price) {
        // eslint-disable-next-line no-plusplus
        if (this.supply > 0) {
            // eslint-disable-next-line no-plusplus
            this.supply--;
            this.emit('buy', email, price, Date.now());
            // eslint-disable-next-line no-useless-return
            return;
        }

        this.emit('error', new Error(chalk.bold.red('There are no more tickets left to purchase')));
    }
}

module.exports = TicketManager;
