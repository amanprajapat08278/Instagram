const express = require("express")
const router = express.Router()
const userModel = require("./userModel.js")



router.post("/login", async (req, res) => {
    try {
        let data = req.body;
        await userModel.create(data)
        res.send("Data Created !")
    } catch (err) {
        res.send(err.message)
    }
})

module.exports = router