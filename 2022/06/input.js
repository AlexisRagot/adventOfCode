const path = require('path');
const fs = require('fs');

const inputs = fs
    .readFileSync(path.join(__dirname, 'puzzle.txt'), 'utf8')
    .toString()
    .trim()

module.exports = {
    inputs,
};
