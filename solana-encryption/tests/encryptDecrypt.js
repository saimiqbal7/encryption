const encryptDecrypt = require('../encryptDecrypt');
const nacl = require('tweetnacl');
const { Keypair } = require('@solana/web3.js');


const keyPair = nacl.box.keyPair();
const publicKeyA = keyPair.publicKey;
const privateKeyA = keyPair.secretKey;


const keyPairB = nacl.box.keyPair();
const publicKeyB = keyPairB.publicKey;
const privateKeyB = keyPairB.secretKey;

const message = 'Hello Saim!'; 
console.log('message: ', message);
const nonce = nacl.randomBytes(nacl.box.nonceLength);
console.log('nonce: ', nonce);

const encrypted = encryptDecrypt.encrypt(message, nonce, publicKeyB, privateKeyA);
console.log('encrypted: ', encrypted);

const decrypted = encryptDecrypt.decrypt(encrypted, nonce, publicKeyA, privateKeyB);
console.log('decrypted: ', decrypted);



