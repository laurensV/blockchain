const crypto = require("crypto");
const SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");

class Block {
    constructor(data = [], timestamp = Math.floor(Date.now() / 1000)) {
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.getHash();
        this.prevHash = "";
    }
    getHash() {
        return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.data));
    }
}

module.exports = Block;