const router = require("express").Router();
const { Nightmare, User } = require("../../models");

router.get("/", async (req, res) => {
  const nightmareData = await Dream.findAll();
  res.json(nightmareData);
});

// router.post("/", async (req, res) => {
//   try {
//     const nightmareData = await Nightmare.create({
//       title: req.body.title,
//       description: req.body.description,
//       date: req.body.date,
//       date_created: req.body.date_created,
//       include: [{ model: User }],
//     });
//     res.status(200).json(nightmareData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;
