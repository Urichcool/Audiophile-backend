const expess = require("express");
const app = expess();

const PORT = 8081;

app.get("/home", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, (err) => {
  if (err) console.error("Error at server launch", err);
  console.log(`Server works at port ${PORT}`);
});
