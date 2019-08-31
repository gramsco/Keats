const axios = require("axios");
const express = require("express");
let app = express();
const hbs = require("hbs")
const path = require("path")
const url = 'http://poetrydb.org/author/keats';


app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")

hbs.registerPartials(path.join(__dirname,"views/partials"))

app.get("/", (req, res) => {

    axios.get(url)
        .then((resp) => {
            let random = Math.floor(Math.random()*resp.data.length)
            let poem = resp.data[random]
            res.render("index", poem)
        })
    .catch((err) => console.log(err))
    
})

app.listen(3000, () => console.log("works at http://localhost:3000"));


// function getData(url) {
//     return axios.get(url)
//         .then((resp) => console.log(resp.status))
//         .catch(() => console.log("all bad"));
// }

// getData(url)

// setTimeout(() => {
//     console.log(getData(url))
// }, 5000);



