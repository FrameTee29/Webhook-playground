const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware to parse JSON
app.use(bodyParser.json());

app.all("*", (req, res) => {
  console.log("Received webhook:", req.body);

  // Respond to webhook sender
  res.status(200).send("Webhook received");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
