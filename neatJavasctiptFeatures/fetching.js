var fetch = require('node-fetch');

fetch('https://www.google.com', {
    method: 'get'
    }).then(function(response) {
  console.log(response);
}).catch(function(err) {
      console.log(err);
    });
