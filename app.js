const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/img", express.static(__dirname + "/img"));
app.use("/", router);

app.listen(process.env.PORT || 3000);
console.log("Running at Port 3000");
