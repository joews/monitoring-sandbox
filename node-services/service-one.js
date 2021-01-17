const express = require("express");
const app = express();
const port = 3030;

app.get("/check", (req, res) => {
  res.send("check");
});

app.get("/jitter", (req, res) => {
  const delay = Math.random() * 1000;

  setTimeout(() => {
    res.send(`jitter ${delay.toFixed(0)}ms`);
  }, delay);
});

app.get("/crash", (req, res) => {
  console.error("crashing!");
  process.nextTick(() => {
    throw new Error("fsdfds");
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// throw new Error("fd");
