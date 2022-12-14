const router = require("express").Router();
const { Dream, User } = require("../../models");
//get route /api/dream/
router.get("/", async (req, res) => {
  const dreamsData = await Dream.findAll({ include: [{ model: User }] });
  res.json(dreamsData);
});
//post route /api/dream/
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
