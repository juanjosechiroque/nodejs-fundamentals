
function asyncFuntion() {
  setTimeout( () => {
    
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err, null);
    }
    
  }, 100);  
}

asyncFuntion( (err, data) => {
  if (err) {
    console.log('error', err);
    return false;
  }  
  console.log('data: ', data);    
});
