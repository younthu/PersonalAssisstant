var dotenv = require('dotenv')
dotenv.config()

// from https://github.com/zanran/node-redmine
var Redmine = require('node-redmine');

// protocol required in Hostname, supports both HTTP and HTTPS
var hostname = process.env.REDMINE_HOST || 'http://success.ilibrary.me';
var config = {
  apiKey: process.env.REDMINE_APIKEY || 'aa4d91d106be87cef3183fefddcd29xxxxxxxxxx'
};

var redmine = new Redmine(hostname, config);

/**
 * Dump issue
 */
var dump_issue = function(issue) {
  console.log('Dumping issue:');
  for (var item in issue) {
    console.log('  ' + item + ': ' + JSON.stringify(issue[item]));
  }
};

redmine.issues({limit: 2}, function(err, data) {
  if (err) throw err;

  for (var i in data.issues) {
    dump_issue(data.issues[i]);
  }

  console.log('total_count: ' + data.total_count);
});