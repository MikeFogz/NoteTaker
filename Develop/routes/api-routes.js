const router = require("express").Router();
const fs = require("fs");

router.get("/api/notes", (req, res) => {
    fs.readFile("./data.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

router.post("/api/notes", (req, res) => {
    console.log(req.body);
});

module.exports = router