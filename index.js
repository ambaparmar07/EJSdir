const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

app.set("view engine", "ejs");
// we can start our server by its root directory from below line
app.set("views", path.join(__dirname, "/views"))

// app.get("/", (req, res) => {
//     res.send("this is home");
// });

app.get("/ig/:username", (req, res) => {
    // const followers = ["adam", "bob", "steve", "abc"];
    // let { username } = req.params;
    let { username } = req.params;       // getting username from data.json that was enetered in the url
    const instaData = require("./data.json");    //requiriing the data.json file and storing it in instaData
    const data = instaData[username];     //storing the enetered username from instaData in data
    //console.log(data)               // printing data...
    if(data) {
    res.render("instagram.ejs", { data });    //rendering the data from instagram.ejs
    } else {
        res.render("error.ejs")
    }
    //console.log(username);
    //res.render("instagram.ejs", {username, followers})
});

app.get("/", (req, res) => {
    res.render("home");      //"home.ejs"
});



app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceVal });     //{ diceVal: diceVal }
});

