const router = require("express").Router();
const { Dream, Nightmare, User } = require("../models");
const getMethods = (obj) => {
  let properties = new Set();
  let currentObj = obj;
  do {
    Object.getOwnPropertyNames(currentObj).map((item) => properties.add(item));
  } while ((currentObj = Object.getPrototypeOf(currentObj)));
  return [...properties.keys()].filter(
    (item) => typeof obj[item] === "function"
  );
};
// const { compareSync } = require("bcrypt");

// Get all dreams/nightmares for homepage

router.get("/", async (req, res) => {
  const dreamsData = await Dream.findAll();
  const nightmareData = await Nightmare.findAll();

  res.render("homePage", { dreamsData, nightmareData });
});

// After login display user dreams + nightmares on left sidebar

router.get("/loggedIn", async (req, res) => {
  const userDreamsData = await User.findOne({
    where: {
      id: req.session.user_id,
    },
    include: [{ model: Dream }],
  });
  const userNightmareData = await User.findOne({
    where: { id: req.session.user_id },
    include: [{ model: Nightmare }],
  });
  const dreamsData = await Dream.findAll();
  const nightmareData = await Nightmare.findAll();
  res.render("userHome", {
    userDreamsData,
    userNightmareData,
    dreamsData,
    nightmareData,
  });
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(403)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    console.log("==============");
    console.log(getMethods(userData));
    console.log("==============");
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(403)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
