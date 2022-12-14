const router = require("express").Router();
const dreamRoutes = require("./dream-routes.js");
const nightmareRoutes = require("./nightmare-routes.js");
//default route /api/
// route /api/dream
router.use("/dream", dreamRoutes);
// route /api/nightmare
router.use("/nightmare", nightmareRoutes);

module.exports = router;
