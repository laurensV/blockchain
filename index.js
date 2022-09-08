const { Block, Blockchain } = require("./src/index.js");

const blockchain = new Blockchain()
const block = new Block();
blockchain.addBlock(block);
console.log(blockchain);
console.log("isValid", blockchain.isValid());