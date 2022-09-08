const Block = require("./block.js");

class Blockchain {
    constructor() {
        // Create our first genesis block
        const genesisBlock = new Block();

        // Chain will contain all the blocks
        this.chain = [Object.freeze(genesisBlock)];
    }
    addBlock(block) {
        // add the hash of the last block of this chain
        block.prevHash = this.getLastBlock().hash;
        // recalculate the block hash now that we set prevHash
        block.hash = block.getHash();
        // Object.freeze ensures immutability in our code
        this.chain.push(Object.freeze(block));
    }
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
    isValid() {
        // Iterate over the chain, skipping the genesis block
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];

            // Check validation
            if (currentBlock.hash !== currentBlock.getHash() || prevBlock.hash !== currentBlock.prevHash) {
                return false;
            }
        }

        return true;
    }
}

module.exports = Blockchain;