let commander = require('commander');
let operation = require('./operation/operation');

function run() {
  let command = new commander.Command();
  command
    .option('-a', 'Add')
    .option('-r', 'Remove')
    .option('-l', 'List')
    .option('-u', 'Update')
    .parse(process.argv);
  let values = command.opts();

  if (values.a) {
    operation.add();
  }
  if (values.r) {
    operation.remove();
  }
  if (values.l) {
    operation.list();
  }
  if (values.u) {
    operation.update();
  }
}

run();
