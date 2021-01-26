const http = require('http');

http.createServer(router).listen(3000);

function router (req, res) {
  
  console.log('New request');  
  console.log(req.url);
  
  res.writeHead(201, { 'Content-Type': 'text-plain' });
  
  switch(req.url) {
      
    case "/":
      res.write("Running Node.js on HTTP");
      res.end();
      break;
      
    case "/hello": 
      res.write("hello :) ");  
      res.end();      
      break;
      
    default: 
      res.write("Error 404");  
      res.end();      
      break;
      
  }
 
}

console.log("Running on por 3000");
