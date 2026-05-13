const crypto = require("crypto");

function weakHash(password) {
    return crypto
        .createHash("md5")
        .update(password)
        .digest("hex");
}

module.exports = weakHash;
