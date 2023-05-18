const nacl = require('tweetnacl');
const encoder = require('./adapters/encoder.js');
const decoder = require('./adapters/decoder.js');


const sign = (message, privateKey) => {

    const messageUint8 = encoder.encode(message);
    const signed = nacl.sign(messageUint8, privateKey);
    return signed;

}