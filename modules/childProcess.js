const { exec, spawn } = require('child_process');

/*exec('ls -la', function (err, stdout) {
  if (err) {
    console.log(err);
    return;
  }  
  console.log(stdout);  
});*/

let myProcess = spawn('ls', ['-la']);

myProcess.stdout.on('data', function (data) {
  console.log(data.toString());
});

myProcess.on('exit', function () {
  console.log("el proceso terminó");
});