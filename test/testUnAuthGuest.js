var login = require('unifi/lib/commands/login'),
    unAuthGuest = require('unifi/lib/commands/unauthorize_guest');

var host = 'localhost',
    port = '8443',
    username = 'admin',
    password = 'admin',
    site = 'default',
    mac = '49:84:7a:fe:97:99',
    minutes = 50;

login(host, port, username, password)
  .then(function(cookie) {
    console.log("cookie: ", cookie);
    return unAuthGuest(host, port, site, cookie, mac);
  });
