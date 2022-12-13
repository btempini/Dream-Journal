const router = require("express").Router();
const dreamRoutes = require("./dream-routes.js");
const userRoutes = require("./user-routes");
const nightmareRoutes = require("./nightmare-routes.js");

router.use("/dream", dreamRoutes);
router.use("/nightmare", nightmareRoutes);
router.use("/", userRoutes);

module.exports = router;
