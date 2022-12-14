const router = require("express").Router();
const { Dream, Nightmare, User } = require("./api");

router.get("/posts", async (req, res) => {
  res.render("postPage")
});

router.get("/", async (req, res) => {
  res.render("homepage")
});

router.get("/dashboard", async (req, res) => {
  res.render("userHome")
});


module.exports = router;
