const crypto = require("crypto");

// Generate a random secret key of 64 bytes (512 bits)
const secretKey = crypto.randomBytes(64).toString("hex");

console.log("Generated Secret Key:", secretKey);
