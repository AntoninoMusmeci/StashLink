const express = require("express");
const getWebPage = require("./controller.js");
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());

app.get("/newspaper", async (req, res) => {
  const url = req.query.url
  const getNewspaper = await getWebPage(url)
  console.log(getNewspaper)
  res.send(getNewspaper)
  
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
