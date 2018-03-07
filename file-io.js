const fs = require('fs')

let stuff = fs.readFileSync('/Users/samuelbrose/workspace/node101/fileIO/file-io.json');
process.stdout.write(stuff.toString());