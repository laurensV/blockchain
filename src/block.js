class Block {
    constructor(data = [], timestamp = Math.floor(Date.now() / 1000)) {
        this.timestamp = timestamp;
        // this.data should contain information like transactions.
        this.data = data;
    }
}

module.exports = Block;