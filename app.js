const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api.");
});

const vehicleRoutes = require("./routes/vehicle.routes")
vehicleRoutes(app);

app.listen(port, () => {
    console.log("Server is running...")
});