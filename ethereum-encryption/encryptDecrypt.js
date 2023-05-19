const EthCrypto = require("eth-crypto");
const crypto = require('crypto');


async function main() {
    const walletData = await generateECIESKeypair();
    console.log("wallet data is  ", walletData);

    const publicKey = walletData.publicKey;
    const privateKey = walletData.privateKey;
    const message = "Hello World!";

    // Encrypt the message
    const encryptedMessage = await encryptMessage(publicKey, message);
    console.log("Encrypted Message:", encryptedMessage);

    // Decrypt the message
    const decryptedMessage = await decryptMessage(privateKey, encryptedMessage);
    console.log("Decrypted Message:", decryptedMessage);
}

async function generateECIESKeypair() {
    const identity = EthCrypto.createIdentity();
    console.log("Public Key:", identity.publicKey);
    console.log("Private Key:", identity.privateKey);
    return {
        publicKey: identity.publicKey,
        privateKey: identity.privateKey,
    };
}

async function encryptMessage(publicKey, message) {
    const compressedPublicKey = EthCrypto.publicKey.compress(publicKey);
    const encryptedMessage = await EthCrypto.encryptWithPublicKey(
        compressedPublicKey,
        message
    );
    return EthCrypto.cipher.stringify(encryptedMessage);
}

async function decryptMessage(privateKey, encryptedMessage) {
    const encryptedObject = EthCrypto.cipher.parse(encryptedMessage);
    const decryptedMessage = await EthCrypto.decryptWithPrivateKey(
        privateKey,
        encryptedObject
    );
    return decryptedMessage;
}




main();