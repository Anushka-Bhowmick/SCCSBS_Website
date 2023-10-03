const express = require("express");
const Event = require("./models/eventModel");
const db = require("./db");
const app = express();
app.use(express.json());
 
const eventsRoute = require('./routes/eventRoute ')

app.get("/", (req, res) => {
  res.send("Server working" + port);
});

app.use("/api/events",eventsRoute)

const port = process.env.PORT || 5000;
app.listen(port, () => "server running on port");
