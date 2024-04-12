const express = require("express");
const _ = require("lodash");
const fs = require("fs");

const app = express();
const num = _.random(1, 10);
console.log(num);

const greet = _.once(() => {
  console.log(`Hello`);
});
greet();
greet();

app.listen(3000),
  "localHost",
  () => {
    console.log("Server is running on port 3000");
  };
