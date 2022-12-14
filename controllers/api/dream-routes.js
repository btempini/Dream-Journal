const express = require("express");
const router = require("express").Router();
const { Dream, User } = require("../../models");
const getDream = require("../../public/js/post");

router.get("/", async (req, res, next) => {
  try{
    res.json(await post.getDreams());
    console.log(res)
  } catch (err) {
    console.error("Error", err.message);
    next(err);
  }
  
});


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