var fs = require('fs');

var env = process.argv[2].replace('--', "").toLowerCase();
var envConfig = fs.readFileSync('./src/environments/environment.' + env + '.ts');
fs.writeFileSync(`./src/environments/environment.ts`, envConfig);
console.log('environment.' + env + '.ts copy done!');
