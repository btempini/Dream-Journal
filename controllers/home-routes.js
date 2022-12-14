const router = require("express").Router();
const { Dream, Nightmare, User } = require("./api");
//route /posts
router.get("/posts", async (req, res) => {
  res.render("postPage")
});
//route /homepage
router.get("/", async (req, res) => {
  const dreamsData = await Dream.findAll({ include: [{ model: User }] });
  const nightmareData = await Nightmare.findAll({ include: [{ model: User }] });
  res.render("homePage", { dreamsData, nightmareData });
  

});
//route /dashboard
router.get("/dashboard", async (req, res) => {
  res.render("userHome")
});


module.exports = router;
