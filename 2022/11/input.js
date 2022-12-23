const path = require('path');
const fs = require('fs');

const inputs = fs
    .readFileSync(path.join(__dirname, 'puzzle.txt'), 'utf8')
    .toString()
    .split('\n\n');

module.exports = {
    inputs,
};
