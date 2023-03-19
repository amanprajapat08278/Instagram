const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        mobile: String,
        password: String
    }
)

module.exports = mongoose.model("User", userSchema)