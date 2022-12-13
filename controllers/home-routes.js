const router = require("express").Router();
const { Dream, Nightmare, User } = require("../models");

router.get("/", async (req, res) => {
  const allData = [];
  const dreamsData = await Dream.findAll({ include: [{ model: User }] });
  const nightmareData = await Nightmare.findAll({ include: [{ model: User }] });

  allData.push(...dreamsData);
  allData.push(...nightmareData);

  res.json(allData);
});

router.get("/", async (req, res) => {
  const nightmareData = await Nightmare.findAll();
  res.json(nightmareData);
});

// router.get("/", async (req, res) => {
//   const dreamData = await Dream.findAll().catch((err) => {
//     res.json(err);
//   });
//   res.status(200).json(dreamData);
//   const dream = dishData.map((dish) => dish.get({ plain: true }));
//   res.render("all", { dream });
// });

module.exports = router;
