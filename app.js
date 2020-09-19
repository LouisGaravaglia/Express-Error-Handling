const express = require("express");
const ExpressError = require("./expressError")

const app = express();


app.get("/", function (req, res) {

  res.send("hiiii")
});

app.get("/mean", function (req, res, next) {
    debugger;
    if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    } else {
        try {
            let numsAsStrings = req.query.nums.split(',');
            const nums = parseInt(numsAsStrings);
            console.log(nums);
            if(!Number.isInteger(nums)) {
                next(new ExpressError("Input can only be integers", 403))
            }
            return res.send(nums)
        } catch(e) {
            next(e)
        }
    }
  res.send("mean page")
});

app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
    res.status(status).send(message)
})
app.listen(3000, function () {
  console.log("Server started on port 3000");
});