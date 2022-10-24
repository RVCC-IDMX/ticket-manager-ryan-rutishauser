/* eslint-disable prefer-destructuring */

// eslint-disable-next-line no-unused-vars
const log = console.log;

const { EventEmitter } = require('events');

const firstEmitter = new EventEmitter();

firstEmitter.emit('My first event');
