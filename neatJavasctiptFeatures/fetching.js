var fetch = require('node-fetch');

fetch('https://www.nytimes.com', {
    method: 'get'
    }).then(function(response) {
  console.log(response.headers._headers.date);
}).catch(function(err) {
      console.log(err);
    });
