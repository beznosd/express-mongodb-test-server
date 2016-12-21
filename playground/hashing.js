const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const pass = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(pass, salt, (err, hash) => {
    // console.log(hash);
  });
});

const hashedPass = '$2a$10$f6Qb7dB0yXlR.SSR4wBRE.zmjPOJlQmO63cNcVnfidtNn/1o8SmiO';
bcrypt.compare(pass, hashedPass, (err, res) => {
  console.log(res);
});

// TOKENS WITH JWT EXAMPLE

// const data = {
//   id: 10
// };

// const token = jwt.sign(data, '123abc');
// console.log(token);

// const decoded = jwt.verify(token, '123abc');
// console.log(decoded);

// TOKENS FROM SCRATCH EXAMPLE

// const message = 'I am user number 3';
// const hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// const data = {
//   id: 4
// };

// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed, don\'t trust');
// }