const yargs = require('yargs');
// try node yargs-demo.js add --title=secret --body "This is my scerte"
const argv = yargs.argv;
console.log(argv);

const command = argv._[0];
console.log('Command: ', command);  //and
console.log('title: ', argv.title, " body: ", argv.body); 

