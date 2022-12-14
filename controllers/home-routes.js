const router = require("express").Router();
const { Dream, Nightmare, User } = require("../models");

router.get("/", async (req, res) => {
  const allData = [];
  const dreamsData = await Dream.findAll();
  const nightmareData = await Nightmare.findAll();

  // allData.push(...dreamsData);
  // allData.push(...nightmareData);
  console.log(dreamsData);
  console.log(nightmareData);

  res.render("homePage", { dreamsData, nightmareData });
});

module.exports = router;
