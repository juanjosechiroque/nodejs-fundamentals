const puppeteer = require('puppeteer');

(async () => {
  console.log('Lanzamos navegador');  
  
  const browser = await puppeteer.launch();
  
  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');
  
  let title1 = await page.evaluate( () => {
    const h1 = document.querySelector('h1');
    return h1.innerHTML;
  });
  
  console.log('title1', title1);
  
  console.log('Cerramos navegador');
  
  browser.close();
  console.log('Navegador cerrado');
  
})();
