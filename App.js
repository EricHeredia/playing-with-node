const EventEmitter = require('events')

const Logger = require('./Logger')
const logger = new Logger()

// Register a listener
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg)
})

logger.log('message')