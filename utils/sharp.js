const sharp = require('sharp');

sharp('original.png')
  .resize(80)   // Resize 80 x 80   
  .toFile('resize.png');


sharp('original.png')
  .resize(80)   
  .grayscale()  // Black and White
  .toFile('resize_black_white.png');