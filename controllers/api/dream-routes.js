const router = require("express").Router();
const { Dream, User } = require("../../models");

router.get("/", async (req, res) => {
  const dreamsData = await Dream.findAll({ include: [{ model: User }] });
  res.json(dreamsData);
});

router.post("/", async (req, res) => {
  try {
    const dreamPost = await Dream.create({
      title: req.body.title,
      description: req.body.description,
      // user_id: req.session.user_id,
      user_id: 2,
    });
    res.status(200).json(dreamPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
