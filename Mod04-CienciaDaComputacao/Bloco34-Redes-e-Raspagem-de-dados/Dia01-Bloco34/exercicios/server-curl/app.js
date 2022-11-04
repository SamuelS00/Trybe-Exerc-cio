const express = require("express");
const cors = require('cors');
const fs = require("fs");
require("express-async-errors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/title", (_req, res, _next) => {

    let title = fs.readFileSync("./title.txt", 'utf8', (err, data) => {
        if (err) throw err;
        return JSON.parse(data);
    });
   
    res.status(200).send(`<h1>${title}</h1>`);
});

app.post("/title", (req, res, next) => {
    const { title } = req.body;
    const { authorization } = req.headers;

    if (authorization !== "vasco") {
        res.status(401).json({ message: "token invalido"});
    };

    if (title === '' || !title) {
        throw new Error("titulo invalido");
    };

    fs.writeFileSync("./title.txt", title, (err) => {
       if (err) throw err;
    });

    res.status(200).json({ message: "adicionado com sucesso" });
});

app.use((err, req, res, next) => {
   console.log(err);
   res.status(500).json({ error: err.message });
   next(err);
});

app.listen(8080, () => {
    console.log("ouvindo na porta:", 8080)
});