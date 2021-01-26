const os = require('os');

console.log("Architecture");
console.log(os.arch());

console.log("Platform");
console.log(os.platform());

console.log("CPU total");
console.log(os.cpus().length);

console.log("CPU details");
console.log(os.cpus());

console.log("Constants");
console.log(os.constants);


const SIZE = 1024;
function kb (bytes) { return bytes / SIZE }
function mb (bytes) { return kb(bytes) / SIZE }
function gb (bytes) { return mb(bytes) / SIZE }

console.log("RAM free");
console.log(`${kb(os.freemem())} KB`);
console.log(`${mb(os.freemem())} MB`);
console.log(`${gb(os.freemem())} GB`);

console.log("Total RAM");
console.log(gb(os.totalmem()));

console.log("Home Directory");
console.log(os.homedir());

console.log("Host Name");
console.log(os.hostname());

console.log("Network Interfaces");
console.log(os.networkInterfaces());

