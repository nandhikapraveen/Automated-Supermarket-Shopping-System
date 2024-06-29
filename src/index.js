const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const collection = require("./mongodb")
const cors=require('cors');
const templatePath = path.join(__dirname, "../templates")

app.use(cors());
app.use(express.json())
app.set("view engine", "hbs") //set view engine as hbs
app.set("views", templatePath) 
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.render("login")
}) // render login page

app.get("/signup", (req, res) => {
    res.render("signup")
}) //render signup page


app.post("/signup", async (req, res) => {

const data = {
    name: req.body.name,
    password: req.body.password
}



await collection.insertMany([data]); //fill data in the collection

res.render("home")
})


app.post("/login", async (req, res) => {

    
    try{
        const check = await collection.findOne({name:req.body.name})

    if(check.password === req.body.password){
        res.render("home")
    }
    else{
        res.send("invalid password")
    }



    }
    catch{

        res.send("invalid username")
    }

})


app.listen(3000, () => {
    console.log('port connected bro');
});

