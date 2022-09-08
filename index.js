const { Block, Blockchain } = require("./src/index.js");

const blockchain = new Blockchain()
const block = new Block();
blockchain.addBlock(block);
console.log(blockchain);