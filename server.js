var FS = require('fs');
var App = require('express')();
var ONE_HOUR = 1000 * 60 * 60;
var ConsoleRouter = new (require('./router.js'))({
  proxy: true,
  cache: process.env.DEVELOPMENT ? false : ONE_HOUR,
  swagger: JSON.parse(FS.readFileSync(__dirname + '/examples/dell.json')),
})

App.use(ConsoleRouter.router);

App.listen(process.env.LUCY_CONSOLE_PORT || 3010);

