const expess = require("express");
const morgan = require("morgan");
const app = expess();

const {homeRouter} = require('./homeRouter')

const PORT = 8081;

app.use(expess.json());
app.use(expess.urlencoded({ extended: true }));
app.use(expess.static('public'));
app.use(morgan('tiny'));
app.use(homeRouter)

app.get("/home", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, (err) => {
  if (err) console.error("Error at server launch", err);
  console.log(`Server works at port ${PORT}`);
});
