const express = require("express");
const app = express();

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.get('/',(req, res) => {
    res.render('Todo.ejs');
    });

    app.listen(3000, () => console.log("Server Up and running"));

app.post('/',(req, res) => {
    console.log(req.body);
    });

    app.listen(3200, () => console.log("Server Up and running"));

  