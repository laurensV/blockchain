const Block = require("./block.js");

class Blockchain {
    constructor() {
        // Blockchain config
        this.difficulty = 1;
        this.blockTime = 10;

        // Create our first genesis block
        const genesisBlock = new Block();
        // Mine a nonce resulting a `valid` hash
        genesisBlock.mine(this.difficulty)
        // Chain will contain all the blocks
        this.chain = [Object.freeze(genesisBlock)];

    }
    addBlock(block) {
        // add the hash of the last block of this chain
        block.prevHash = this.getLastBlock().hash;
        // recalculate the block hash now that we set prevHash
        block.hash = block.getHash();
        // mine a nonce for this block resulting in a 'valid' hash
        block.mine(this.difficulty);
        this.chain.push(Object.freeze(block));
        this.recalculateDifference();
    }
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
    recalculateDifference() {
        const difference = (Math.floor(Date.now() / 1000) - this.getLastBlock().timestamp);
        console.log('last block time', difference);
        this.difficulty += difference < this.blockTime ? 1 : -1;
        console.log("new difficulty", this.difficulty);
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