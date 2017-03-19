var fetch = require('node-fetch');

fetch('https://www.nytimes.com')
  .then(function(response) {
  console.log(response._headers.date);
}).catch(function(err) {
      console.log("Error Error " + err);
    });

