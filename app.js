const boardcast = require('./boardcast.js');
const cron = require('node-cron');

cron.schedule('0 0 12 * * *', boardcast);
cron.schedule('0 0 16 * * *', boardcast);
