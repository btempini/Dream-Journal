const router = require("express").Router();
const { Dream, User } = require("../../models");

router.get("/", async (req, res) => {
  const dreamsData = await User.findOne({
    where: {
      id: req.session.user_id,
    },
    include: [{ model: Dream }],
  });
  res.render("postPage");
});

router.post("/", async (req, res) => {
  try {
    const dreamPost = await Dream.create({
      title: req.body.title,
      description: req.body.description,
      user_id: req.session.user_id,
    });
    res.status(200).json(dreamPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
