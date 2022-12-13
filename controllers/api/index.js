const router = require("express").Router();
const dreamRoutes = require("./dream-routes.js");
const nightmareRoutes = require("./nightmare-routes.js");

router.use("/dream", dreamRoutes);
router.use("/nightmare", nightmareRoutes);

module.exports = router;
