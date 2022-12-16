const router = require("express").Router();
const { Nightmare, User, Dream } = require("../../models");

router.get("/", async (req, res) => {
  const userDreamsData = await User.findOne({
    where: { id: req.session.user_id },
    include: [{ model: Dream }],
  });
  const userNightmareData = await User.findOne({
    where: { id: req.session.user_id },
    include: [{ model: Nightmare }],
  });
  res.render("postPage", userDreamsData, userNightmareData);
});

//If user checks dream, else if user checks nightmare

router.post("/dream", async (req, res) => {
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

router.post("/nightmare", async (req, res) => {
  try {
    const nightmareData = await Nightmare.create({
      title: req.body.title,
      description: req.body.description,
      user_id: req.session.user_id,
    });
    res.status(200).json(nightmareData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
