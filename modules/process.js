
process.on('beforeExit', ()  => {
  console.log('proceso va a terminar');
});

process.on('exit', ()  => {
  console.log('proceso terminó');
  setTimeout( () => {
    console.log('esto nunca se ejecutará');
  }, 100);
});

process.on('uncaughtException', (err, origin) => {
  console.error("Se nos ha olvido capturar un erro");
  console.error(err);
});

//funcionQueNoExiste();
