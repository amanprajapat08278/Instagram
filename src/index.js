const express = require("express")
const cors = require("cors")
const app = express()
const route = require("./route.js")
const { default: mongoose } = require("mongoose")



app.use(express.json())

app.use(cors({ origin: "*" }))

app.use("/", route)

mongoose.connect("mongodb+srv://amanprajapat82780:Lucky82780@newproject.3qdy8y3.mongodb.net/Instagram?retryWrites=true&w=majority",
    { useNewUrlParser: true })
    .then(() => console.log("mongoDB connected")).catch((err) => console.log(err.message))

    
app.listen(process.env.PORT || 3001, () => {
    console.log("server running on port 3001")
})