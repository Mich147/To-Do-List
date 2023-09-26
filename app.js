const express = require ("express");
const app = express();
let items = ["Out of work","Feed the babies","Take a nap","Join the class"];

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
let today = new Date ();
let myDate = {
 weekday: "long",
 day: "numeric",
 month: "long"
};

let day = today.toLocaleDateString("en-US", myDate)

res.render("list", {myDay: day, addedItem: items});

});
app.post("/", function(req, res){
// item = req.body.addItem;
var item = req.body.addItem;
items.push(item);
 res.redirect("/");
})
app.listen(8000, function(){
 console.log("Server started on port 8000")
})