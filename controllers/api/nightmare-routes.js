const router = require("express").Router();
const { Nightmare, User } = require("../../models");

router.post("/", async (req, res) => {
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
