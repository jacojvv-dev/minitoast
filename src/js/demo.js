import minitoast from './minitoast';

console.log("Welcome to minitoast, feel free to use this product anyway way you like.");
var t = new minitoast();
window.t = t;
t.info('Welcome to Mini Toast, click the buttons to get some toast!');

var funInfoMessages = ['minitoast does not require jQuery',
    'minitoast is loved by llamas all around the world',
    'You will love minitoast so much you will ask it to be your valentine',
    'minitoast is < 3kb, it\'s all about the little things',
    'minitoast is easy to customize',
    'minitoast is free to use',
    'Fork us on github!',
    'minitoast is mobile friendly, try it on your phone',
    'minitoast enjoys long walks on the beach, and not bloating your website',
    'minitoast, this is a start of a beautiful friendship',
    'minitoast is great at small talk'];

var messageCategories = ['info', 'success', 'warning', 'error', 'default'];

function getRandomFact() {
    return funInfoMessages[Math.floor(Math.random() * funInfoMessages.length)];
}

window.getRandomFact = getRandomFact;

// Some random interval messages
setInterval(function () {
    var category = messageCategories[Math.floor(Math.random() * messageCategories.length)];
    t[category](getRandomFact());
}, 7000); 
