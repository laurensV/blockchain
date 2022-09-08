const { Block, Blockchain } = require("./src/index.js");

const blockchain = new Blockchain()

console.log(blockchain);
for (let i = 0; i < 10; i++) {
    const block = new Block();
    blockchain.addBlock(block);
}
console.log(blockchain);
console.log("isValid", blockchain.isValid());