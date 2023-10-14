const expess = require("express");
const homeRouter = expess.Router();


homeRouter.get('/home/new', (req, res) => {
    return res.json({
res:"twoja stara"
    });
})

module.exports = {homeRouter}