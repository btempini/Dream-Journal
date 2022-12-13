const router = require("express").Router();
const { Dream, User } = require("../../models");

router.get("/", async (req, res) => {
  const dreamsData = await Dream.findAll();
  res.json(dreamsData);
});

// router.post("/", async (req, res) => {
//   try {
//     const dreamPost = await Dream.create({
//       title: req.body.title,
//       description: req.body.description,
//       date: req.body.date,
//       date_created: req.body.date_created,
//       include: [{ model: User }],
//     });
//     res.status(200).json(dreamPost);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;
