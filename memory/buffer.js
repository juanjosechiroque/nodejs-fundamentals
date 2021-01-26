
//const buffer = Buffer.alloc(1);

//const buffer = Buffer.alloc(4);

//const buffer = Buffer.from([1,2,3]);

//const buffer = Buffer.from('Hola');

const abc = Buffer.alloc(26);

for(let i = 0; i < abc.length; i++) {
  abc[i] = i + 97;
}
console.log(abc);
console.log(abc.toString());
