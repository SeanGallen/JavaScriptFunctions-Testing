var prompt = require('prompt');
var random = Math.random();
var multi = random * 100;
var number = Math.round(multi);

prompt.start();


console.log('Guess a number between 1 - 100');
function get() {
  prompt.get(['guess'], function (err, result) {
    if (err) { return onErr(err); }
    var guess = result.guess;
    console.log(guessingGame(guess, number));
  });
};


function onErr (err) {
  console.log(err);
  return 1;
}
get();

function guessingGame(guess, number)
{
  if (guess < number)
  {
    console.log('Higher ');
    return get();
  }
  else if (guess > number)
  {
    console.log('Lower ');
    get();
  }
  else
  {
    return('Great Job! We both picked ' + number);
  }
}


