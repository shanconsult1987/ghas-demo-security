const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
    res.send("Dependabot Demo App Running");
});

app.get("/users", async (req, res) => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    res.json(response.data);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
