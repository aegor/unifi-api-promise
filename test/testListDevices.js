var login = require('unifi/lib/commands/login'),
    device = require('unifi/lib/status/device');

var host = 'localhost',
    port = '8443',
    username = 'admin',
    password = 'admin',
    site = 'default';

login(host, port, username, password)
  .then(function(cookie) {
    console.log("cookie: ", cookie);
    return device(host, port, site, cookie);
  })
  .then(function(devices) {
    devices.forEach(function(ap) {
      console.log(ap.mac);
    });
  });
