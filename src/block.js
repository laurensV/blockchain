const crypto = require("crypto");
const SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");

class Block {
    constructor(data = [], timestamp = Math.floor(Date.now() / 1000)) {
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.getHash();
        this.prevHash = "";
        this.nonce = 0;
    }
    getHash() {
        return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.data) + this.nonce);
    }
    mine(difficulty) {
        // Basically, it loops until our hash starts with 
        // the string 0...000 with length of <difficulty>.
        while (!this.hash.startsWith(Array(difficulty + 1).join("0"))) {
            // We increases our nonce so that we can get a whole different hash.
            this.nonce++;
            // Update our new hash with the new nonce value.
            this.hash = this.getHash();
        }
        console.log("Found valid hash!", this.hash)
    }
}

module.exports = Block;