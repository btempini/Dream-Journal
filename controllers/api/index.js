const router = require("express").Router();
const postRoutes = require("./post-routes.js");
//default route /api/
// route /api/dream
router.use("/post", postRoutes);

module.exports = router;
