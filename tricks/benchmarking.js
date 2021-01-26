let suma = 0;

console.time('bucle');

for (var i = 0; i < 10000; i++) {
  suma ++;  
}

console.timeEnd('bucle');


console.time('asyncFunction');

function asyncFunction () {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      console.log('asyncFunction running');
      resolve();
    }, 2000);
    
  });
}

asyncFunction()
  .then( () => {
    console.timeEnd('asyncFunction');
  });