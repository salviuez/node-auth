const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const userController = require("./controller/user")
const cors = require("cors");
const app = express();
const port = 4000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// mongoose.connect('mongodb://127.0.0.1:27017/test')
mongoose.connect('mongodb+srv://salviuez:Jesusatas19@cluster0.iy7r0xj.mongodb.net/latestDB')
    // mongoose.connect('mongodb://localhost:27017/latestDB')
    .catch(error => console.log(error)).then(success => console.log("db connected"));


// mongoose.connect("mongodb://localhost:27017/latestDB", {
//     useNewUrlParser: true, useUnifiedTopology: true
// }, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("successfully connected");
//     }
// })

app.post("/signup", userController.signup)
app.post("/signin", userController.signin)
app.post("/send-otp", userController.sendotp)
app.post("/submit-otp", userController.submitotp)


app.listen(port, () => {
    console.log(`app started in ${port}`)
})