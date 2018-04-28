//This file is not transpiled. Use CommonJS and ES5

//Register Babel to transpile before our tests run
require('babel-register')();

//disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};
