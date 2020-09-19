const express = require("express");
const ExpressError = require("./expressError")
const { convertAndValidateNumsArray, findMean } = require("./helpers")
const app = express();

app.get("/mean", function (req, res, next) {
    if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    } else {
        try {
            let numsAsStrings = req.query.nums.split(',');
            nums = convertAndValidateNumsArray(numsAsStrings)
        } catch(e) {
            next(new ExpressError("You may only pass Integers as values.", 403))
        }
    }
    const result = {
        operation: "mean",
        result: findMean(nums)
    }
    return res.send(result)
});

app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
    res.status(status).send(message)
})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});