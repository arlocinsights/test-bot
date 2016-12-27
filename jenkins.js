var jenkinsapi = require('jenkins');

// no auth
//var jenkins = jenkinsapi.init("http://jenkins-07:8080/");

// username/password
//var jenkins = jenkinsapi.init("http://admin:welcome@http://jenkins-07:8080");
var jenkins = require('jenkins')({ baseUrl: 'http://admin:welcome@jenkins-07:8080', crumbIssuer: true });

// API Token
//var jenkins = jenkinsapi.init('https://username:token@jenkins.company.com');


jenkins.build.get('core-mvn-develop-snapshot', 1, function(err, data) {
  if (err) throw err;

  console.log('build', data);
});




jenkins.job.build('core-mvn-develop-snapshot', function(err, data) {
  //if (err) throw err;

  console.log('queue item number', data);
});