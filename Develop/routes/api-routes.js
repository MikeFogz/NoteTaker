const router = require("express").Router();
const fs = require("fs");

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

router.post("/notes", (req, res) => {
    console.log(req.body);
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        
        const savedNotes = JSON.parse(data);
        
        savedNotes.push({
            title: req.body.title,
            text: req.body.text,
        });
    
        console.log(savedNotes);
        fs.writeFile("./db/db.json", JSON.stringify(savedNotes), (err) => {
            if (err) return res.JSON({ err: "problem adding" });
            res.json({msg: "successfully added" });
        });
    });
});

router.delete("/notes", (req, res) => {
    console.log("success!");
});

module.exports = router