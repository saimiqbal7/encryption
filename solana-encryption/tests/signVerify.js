const signVerify = require('../signVerify');
const nacl = require('tweetnacl');
const { Keypair } = require('@solana/web3.js');

const keypair = Keypair.generate();
const publicKey = keypair.publicKey;
const privateKey = keypair.secretKey;

const message = 'Hello Saim!';
const messageUint8 = (message);
console.log('message: ', message);

const signature = signVerify.sign(message, privateKey);
console.log('signed: ', signature);


console.log(typeof publicKey);
console.log(typeof signature);

const verified = signVerify.verify(signature, publicKey);
console.log('verified: ', verified);